const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  } else if (request.method === 'POST' && request.url === '/upper') {
    let body = [];
    request
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString().toUpperCase();
        response.writeHead(200, defaultCorsHeader);
        response.write(body);
        response.end();
      })
      .on('error', console.error);
  } else if (request.method === 'POST' && request.url === '/lower') {
    let body = [];
    request
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString().toLowerCase();
        response.writeHead(200, defaultCorsHeader);
        response.end(body);
      })
      .on('error', console.error);
  } else {
    response.writeHead(400, defaultCorsHeader);
    response.end('hello mini-server sprints');
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10,
};
