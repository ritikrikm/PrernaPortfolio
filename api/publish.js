const crypto = require("crypto");

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
    || !Array.isArray(portfolio?.featuredProducts)
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

function encodeGithubPath(path) {
  return encodeURIComponent(path).replaceAll("%2F", "/");
}

function mimeExtension(mimeType = "") {
  const mime = mimeType.toLowerCase();
  if (mime === "image/jpeg" || mime === "image/jpg") return "jpg";
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  if (mime === "image/gif") return "gif";
  if (mime === "image/svg+xml") return "svg";
  return "bin";
}

function parseDataImage(value = "") {
  const match = String(value).match(/^data:(image\/[a-z0-9.+-]+);base64,([a-z0-9+/=\s]+)$/i);
  if (!match) return null;
  const buffer = Buffer.from(match[2].replace(/\s/g, ""), "base64");
  if (!buffer.length) return null;
  return {
    mimeType: match[1],
    buffer,
    base64: buffer.toString("base64")
  };
}

async function uploadAssetIfNeeded(dataUrl, github, cache, stats) {
  if (cache.has(dataUrl)) return cache.get(dataUrl);

  const parsed = parseDataImage(dataUrl);
  if (!parsed) return dataUrl;

  const hash = crypto.createHash("sha256").update(parsed.buffer).digest("hex").slice(0, 20);
  const extension = mimeExtension(parsed.mimeType);
  const assetPath = `assets/uploads/${hash}.${extension}`;
  const encodedPath = encodeGithubPath(assetPath);
  const assetUrl = `https://api.github.com/repos/${github.owner}/${github.repo}/contents/${encodedPath}?ref=${github.branch}`;
  const currentAssetResponse = await fetch(assetUrl, { headers: github.headers });

  if (currentAssetResponse.ok) {
    stats.reused += 1;
    cache.set(dataUrl, assetPath);
    return assetPath;
  }

  if (currentAssetResponse.status !== 404) {
    const details = await currentAssetResponse.json().catch(() => ({}));
    throw new Error(githubErrorMessage(currentAssetResponse.status, details.message || "Could not read GitHub asset."));
  }

  const uploadResponse = await fetch(`https://api.github.com/repos/${github.owner}/${github.repo}/contents/${encodedPath}`, {
    method: "PUT",
    headers: github.headers,
    body: JSON.stringify({
      branch: github.branch,
      message: `Add portfolio asset ${hash}`,
      content: parsed.base64
    })
  });

  if (!uploadResponse.ok) {
    const details = await uploadResponse.json().catch(() => ({}));
    throw new Error(githubErrorMessage(uploadResponse.status, details.message || "Could not upload GitHub asset."));
  }

  stats.uploaded += 1;
  cache.set(dataUrl, assetPath);
  return assetPath;
}

async function replaceDataImages(value, uploadImage) {
  if (typeof value === "string") {
    return value.startsWith("data:image/") ? uploadImage(value) : value;
  }

  if (Array.isArray(value)) {
    const nextItems = [];
    for (const item of value) {
      nextItems.push(await replaceDataImages(item, uploadImage));
    }
    return nextItems;
  }

  if (value && typeof value === "object") {
    const nextObject = {};
    for (const [key, item] of Object.entries(value)) {
      nextObject[key] = await replaceDataImages(item, uploadImage);
    }
    return nextObject;
  }

  return value;
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

    const path = encodeGithubPath(GITHUB_FILE_PATH);
    const fileUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
    const headers = githubHeaders(GITHUB_TOKEN);
    const assetStats = { uploaded: 0, reused: 0 };
    const assetCache = new Map();
    const preparedPortfolio = await replaceDataImages(
      portfolio,
      (dataUrl) => uploadAssetIfNeeded(dataUrl, {
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        branch: GITHUB_BRANCH,
        headers
      }, assetCache, assetStats)
    );
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

    const content = Buffer.from(`${JSON.stringify(preparedPortfolio, null, 2)}\n`).toString("base64");
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
      commitUrl: result.commit?.html_url || "",
      assetCount: assetStats.uploaded,
      reusedAssetCount: assetStats.reused,
      portfolio: preparedPortfolio
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Publish failed." });
  }
};
