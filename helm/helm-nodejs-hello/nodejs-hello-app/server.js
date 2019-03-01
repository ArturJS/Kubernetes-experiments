const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from NodeJS');
});

server.listen(1234, () => {
  console.log('NodeJS server is up and running on 1234 port. Enjoy!');
});
