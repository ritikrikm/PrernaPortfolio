# Prerna Sharma Portfolio

Static portfolio site with a private admin studio at `#/studio`.

## Publish Setup

The Publish button uses Vercel serverless functions in `api/` to update `data/portfolio.json` on GitHub. Add these variables in Vercel under Project Settings -> Environment Variables:

```txt
ADMIN_PASSWORD=prerna-admin
GITHUB_TOKEN=<fresh GitHub token>
GITHUB_OWNER=ritikrikm
GITHUB_REPO=PrernaPortfolio
GITHUB_BRANCH=main
GITHUB_FILE_PATH=data/portfolio.json
```

Use a GitHub token with repository contents read/write permission. Do not commit `.env` or `.env.local`.

## Local Preview

For a simple static preview:

```sh
python3 -m http.server 8766
```

Then open:

```txt
http://localhost:8766/index.html#/portfolio
```

Local admin fallback password is `prerna-admin`. On production, admin login uses the Vercel `ADMIN_PASSWORD` environment variable.
