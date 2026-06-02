# Prerna Sharma Design Showcase

Static design showcase site with a private admin studio at `#/studio`.

## Publish Setup

The Publish button uses Vercel serverless functions in `api/` to update `data/portfolio.json` on GitHub. Uploaded images are moved into `assets/uploads/`, and resume uploads replace the files in `assets/resume/` during publish. The JSON stores file paths instead of large base64 strings. Add these variables in Vercel under Project Settings -> Environment Variables:

```txt
ADMIN_PASSWORD=<your-admin-password>
GITHUB_TOKEN=<fresh GitHub token>
GITHUB_OWNER=ritikrikm
GITHUB_REPO=PrernaPortfolio
GITHUB_BRANCH=testing
GITHUB_FILE_PATH=data/portfolio.json
```

Use a GitHub token with repository contents read/write permission. Keep the admin password and token only in Vercel environment variables. Do not commit `.env` or `.env.local`.

## Local Preview

For a simple static preview:

```sh
python3 -m http.server 8766
```

Then open:

```txt
http://localhost:8766/index.html#/featured-projects
```

On this testing branch, the publish API is pinned to the `testing` branch so admin testing does not update `main`.
