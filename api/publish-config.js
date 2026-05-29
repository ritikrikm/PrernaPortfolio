module.exports = function handler(req, res) {
  const {
    ADMIN_PASSWORD,
    GITHUB_TOKEN,
    GITHUB_OWNER,
    GITHUB_REPO,
    GITHUB_BRANCH = "main",
    GITHUB_FILE_PATH = "data/portfolio.json"
  } = process.env;

  const valueStatus = (value) => ({
    exists: Boolean(value),
    length: value ? value.length : 0,
    hasLeadingOrTrailingSpace: value ? value !== value.trim() : false,
    value: value ? value.trim() : ""
  });

  res.status(200).json({
    adminPassword: {
      exists: Boolean(ADMIN_PASSWORD),
      length: ADMIN_PASSWORD ? ADMIN_PASSWORD.length : 0,
      matchesExpectedLocalPassword: ADMIN_PASSWORD === "prerna-admin"
    },
    githubToken: {
      exists: Boolean(GITHUB_TOKEN),
      length: GITHUB_TOKEN ? GITHUB_TOKEN.length : 0,
      startsWith: GITHUB_TOKEN ? GITHUB_TOKEN.slice(0, 4) : "",
      endsWith: GITHUB_TOKEN ? GITHUB_TOKEN.slice(-4) : "",
      hasLeadingOrTrailingSpace: GITHUB_TOKEN ? GITHUB_TOKEN !== GITHUB_TOKEN.trim() : false
    },
    githubOwner: valueStatus(GITHUB_OWNER),
    githubRepo: valueStatus(GITHUB_REPO),
    githubBranch: valueStatus(GITHUB_BRANCH),
    githubFilePath: valueStatus(GITHUB_FILE_PATH)
  });
};
