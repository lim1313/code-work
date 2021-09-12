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

const express = require('express');
const PORT = 5000;
const ip = 'localhost';

//! express
// const app = express();

// const cors = require('cors');

// const defaultCorsHeader = {
//   origin: 'http://localhost:3000',
//   methods: 'GET, POST, PUT, DELETE, OPTIONS',
//   allowedHeaders: 'Content-Type, Accept',
//   maxAge: 3,
// };

// app.use(cors(defaultCorsHeader));
// app.use(express.json({ strict: false }));

// app.options('/*', cors(defaultCorsHeader));

// app.get('/upper', (req, res, next) => {
//   res.status(200).json('upper get ok');
// });
// app.post('/upper', (req, res, next) => {
//   res.status(200).json(req.body.toUpperCase());
// });
// app.post('/lower', (req, res, next) => {
//   res.status(200).json(req.body.toLowerCase());
// });
// app.use((error, req, res, next) => {
//   res.status(404).send('system error');
// });

// app.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });
