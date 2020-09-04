const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const num = _.random(1, 20);
console.log(num);

const greet = _.once(() => {
  console.log("ciao");
});

greet();
greet();

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log("request made.", url, method);

  // set content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/",
    statusCode = 200;

  switch (url) {
    case "/":
      path += "index.html";
      break;

    case "/about":
      path += "about.html";
      break;

    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.statusCode = statusCode;
      res.end(data);
    }
  }); //
});

server.listen(3000, "localhost", () => {
  console.log("server in listening on port 3000,");
});
