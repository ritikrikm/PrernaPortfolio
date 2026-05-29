const githubHeaders = (token) => ({
  "Accept": "application/vnd.github+json",
  "Authorization": `Bearer ${token}`,
  "User-Agent": "prerna-portfolio-publisher",
  "X-GitHub-Api-Version": "2022-11-28"
});

async function githubProbe(url, headers) {
  const response = await fetch(url, { headers });
  const body = await response.json().catch(() => ({}));

  return {
    ok: response.ok,
    status: response.status,
    message: body.message || "",
    htmlUrl: body.html_url || "",
    sha: body.sha || "",
    name: body.name || ""
  };
}

module.exports = async function handler(req, res) {
  const {
    GITHUB_TOKEN,
    GITHUB_OWNER,
    GITHUB_REPO,
    GITHUB_BRANCH = "main",
    GITHUB_FILE_PATH = "data/portfolio.json"
  } = process.env;

  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    res.status(500).json({ error: "GitHub environment variables are missing." });
    return;
  }

  const headers = githubHeaders(GITHUB_TOKEN);
  const owner = encodeURIComponent(GITHUB_OWNER.trim());
  const repo = encodeURIComponent(GITHUB_REPO.trim());
  const branch = encodeURIComponent(GITHUB_BRANCH.trim());
  const path = encodeURIComponent(GITHUB_FILE_PATH.trim()).replaceAll("%2F", "/");
  const apiBase = `https://api.github.com/repos/${owner}/${repo}`;

  try {
    const [repoCheck, branchCheck, fileCheck] = await Promise.all([
      githubProbe(apiBase, headers),
      githubProbe(`${apiBase}/branches/${branch}`, headers),
      githubProbe(`${apiBase}/contents/${path}?ref=${branch}`, headers)
    ]);

    res.status(200).json({
      requested: {
        owner: GITHUB_OWNER.trim(),
        repo: GITHUB_REPO.trim(),
        branch: GITHUB_BRANCH.trim(),
        filePath: GITHUB_FILE_PATH.trim()
      },
      token: {
        exists: true,
        hasLeadingOrTrailingSpace: GITHUB_TOKEN !== GITHUB_TOKEN.trim()
      },
      checks: {
        repo: repoCheck,
        branch: branchCheck,
        file: fileCheck
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "GitHub check failed." });
  }
};
