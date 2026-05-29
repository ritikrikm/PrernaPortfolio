const githubHeaders = (token) => ({
  "Accept": "application/vnd.github+json",
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json",
  "User-Agent": "prerna-portfolio-publisher",
  "X-GitHub-Api-Version": "2022-11-28"
});

function readBody(req) {
  if (req.body && typeof req.body === "object") return Promise.resolve(req.body);
  if (typeof req.body === "string") return Promise.resolve(JSON.parse(req.body));

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function validatePortfolio(portfolio) {
  if (
    !Array.isArray(portfolio?.experiences)
    || !Array.isArray(portfolio?.projects)
    || !Array.isArray(portfolio?.portfolioProjects)
  ) {
    return false;
  }
  return portfolio.experiences.every((item) => item.id && item.company && item.title);
}

function githubErrorMessage(status, fallback = "GitHub publish failed.") {
  if (status === 404) {
    return "GitHub repo or file was not found. Check GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH, GITHUB_FILE_PATH, and make sure GITHUB_TOKEN has Contents read/write access to this repo.";
  }
  if (status === 401 || status === 403) {
    return "GitHub token is not authorized. Create a fresh token with Contents read/write access to this repo and update GITHUB_TOKEN in Vercel.";
  }
  return fallback;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST." });
    return;
  }

  const {
    ADMIN_PASSWORD,
    GITHUB_TOKEN,
    GITHUB_OWNER,
    GITHUB_REPO,
    GITHUB_BRANCH = "main",
    GITHUB_FILE_PATH = "data/portfolio.json"
  } = process.env;

  if (!ADMIN_PASSWORD || !GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    res.status(500).json({ error: "Publish environment variables are missing." });
    return;
  }

  try {
    const { password, portfolio } = await readBody(req);
    if (password !== ADMIN_PASSWORD) {
      res.status(401).json({ error: "Wrong admin password." });
      return;
    }

    if (!validatePortfolio(portfolio)) {
      res.status(400).json({ error: "Portfolio data is incomplete." });
      return;
    }

    const path = encodeURIComponent(GITHUB_FILE_PATH).replaceAll("%2F", "/");
    const fileUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
    const headers = githubHeaders(GITHUB_TOKEN);
    const currentFileResponse = await fetch(fileUrl, { headers });
    let sha;

    if (currentFileResponse.ok) {
      const currentFile = await currentFileResponse.json();
      sha = currentFile.sha;
    } else if (currentFileResponse.status !== 404) {
      const details = await currentFileResponse.json().catch(() => ({}));
      res.status(currentFileResponse.status).json({
        error: githubErrorMessage(currentFileResponse.status, details.message || "Could not read GitHub file.")
      });
      return;
    }

    const content = Buffer.from(`${JSON.stringify(portfolio, null, 2)}\n`).toString("base64");
    const publishResponse = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        branch: GITHUB_BRANCH,
        message: "Update portfolio content",
        content,
        sha
      })
    });

    const result = await publishResponse.json().catch(() => ({}));
    if (!publishResponse.ok) {
      res.status(publishResponse.status).json({
        error: githubErrorMessage(publishResponse.status, result.message || "GitHub publish failed.")
      });
      return;
    }

    res.status(200).json({
      ok: true,
      commitUrl: result.commit?.html_url || ""
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Publish failed." });
  }
};
