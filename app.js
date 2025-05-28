// Create a server that can send back files
const https = require("https");
const url = require("url");
const fs = require("fs");
const path = require("path");
const lookup = require("mime-types").lookup;
const sqlite3 = require("sqlite3").verbose();

// Initialize SQLite database
const db = new sqlite3.Database(path.join(__dirname, "metrics.db"));
db.run(`CREATE TABLE IF NOT EXISTS metrics (
  template TEXT PRIMARY KEY,
  count INTEGER DEFAULT 0
)`);

// SSL certificate
const sslOptions = {
  key: fs.readFileSync("certificates/key.pem"),
  cert: fs.readFileSync("certificates/cert.pem")
};

// HTTPS server
const server = https.createServer(sslOptions, (req, res) => {
  const parsedURL = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedURL.pathname;

  // Handle metrics API
  if (method === "GET" && pathname === "/metrics") {
    db.all("SELECT template, count FROM metrics", [], (err, rows) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "DB read failed" }));
      } else {
        const data = Object.fromEntries(rows.map(row => [row.template, row.count]));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      }
    });
    return;
  }

  if (method === "POST" && pathname.startsWith("/increment/")) {
    const templateName = pathname.split("/")[2];
    db.run(
      `INSERT INTO metrics (template, count) VALUES (?, 1)
       ON CONFLICT(template) DO UPDATE SET count = count + 1`,
      [templateName],
      err => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "DB write failed" }));
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: `Incremented ${templateName}` }));
        }
      }
    );
    return;
  }

  // Static file handler
  let filePath = pathname.replace(/^\/+|\/+$/g, "") || "index.html";
  const fullPath = path.join(__dirname, "public", filePath);

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      console.log(`File Not Found: ${fullPath}`);
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      console.log(`Serving: ${filePath}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.writeHead(200, { "Content-Type": lookup(filePath) || "application/octet-stream" });
      res.end(content);
    }
  });
});

server.listen(3443, "localhost", () => {
  console.log("✅ HTTPS server running on https://localhost:3443");
});
