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

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST." });
    return;
  }

  try {
    const { password } = await readBody(req);
    if (password && password === process.env.ADMIN_PASSWORD) {
      res.status(200).json({ ok: true });
      return;
    }
    res.status(401).json({ error: "Wrong admin password." });
  } catch (error) {
    res.status(500).json({ error: error.message || "Auth failed." });
  }
};
