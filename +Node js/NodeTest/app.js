const http = require("http");

const hostname = '127.0.0.1'; //localhost
const port = 3000; // bus pasiekiamas http://127.0.0.1:3000 arba http://localhost:3000

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-type','text/plain');
   res.end('<h1>Ajax veikia!</h1>');
});

server.listen(port,hostname,() => {
   console.log('Server started on post '+port);
});