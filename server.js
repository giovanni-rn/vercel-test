const http = require("node:http"); // load the library to create a server

const hostname = "127.0.0.1"; // localhost address
const port = 3000; // server port

const server = http.createServer((req, res) => {
  // Set CORS headers to allow requests from specified origins
  // res.setHeader("Access-Control-Allow-Origin", [
  //   "http://127.0.0.1:5500",
  //   "https://oriano-dev.github.io/one-piece-game",
  // ]);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle endpoints (routes)
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" }); // add success status code and type for browser
    return res.end("Yo"); // display simple message on client side
  } // display simple message in client
});

server.listen(port, hostname, () => {
  // runs the server on localhost:3000
  console.log(`Server running at http://${hostname}:${port}/`); // message to display in console
});
