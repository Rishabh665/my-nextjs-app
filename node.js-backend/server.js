// creation a basic http server using node.js//

// server.js

const http = require("http");

// create server

const server = http.createServer((req, res) => {
  res.write(
    "Hello World! My name is Rishabh Vishwakarma, \n ----> this is my first http server using node.js ...",
  );

  res.end();
});

// run server

server.listen(5000, () => {
  console.log("-----  Server running on http://localhost:5000  -----");
});
