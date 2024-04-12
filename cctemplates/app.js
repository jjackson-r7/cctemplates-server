// Create a server that can send back files
const https = require("https");
const url = require("url");
const fs = require("fs");
const path = require("path");

//npm i mime-types
const lookup = require("mime-types").lookup;

const sslOptions = {
key:fs.readFileSync('certificates/key.pem'),
cert:fs.readFileSync('certificates/cert.pem')
}

const server = https.createServer(sslOptions, (req, res) => {
  //handle the request and send back a static file
  //from a folder called 'public'
  let parsedURL = url.parse(req.url, true);
  //remove the leading trailing slashes
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  if (path === "") {
    path = "index.html";
  }

  console.log(`Requested path ${path} `);

  let file = __dirname + "/public/" + path;
  //async read file function uses callback
  fs.readFile(file, function (err, content) {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      //specify the content type in the response
      console.log(`Returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let mime = lookup(path);
      res.writeHead(200, { "Content-type": mime });
      res.end(content);
    }
  });
});

server.listen(3443, "localhost", () => {
  console.log("Listening on port 3443");
});
