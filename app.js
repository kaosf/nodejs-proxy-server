const httpProxy = require("http-proxy");
const apiPath = "/api/v1";

httpProxy.createServer((req, res, proxy) => {
  if (req.url.indexOf(apiPath) === 0) {
    proxy.proxyRequest(req, res, {
      host: "localhost",
      port: 3000
    });
  } else {
    proxy.proxyRequest(req, res, {
      host: "localhost",
      port: 9000
    });
  }
}).listen(8000);

console.log("Starting Server at http://localhost:8000/");
