const express = require('express');

const server = express();

const port = process.env.PORT || 9000;

server.get('/', (req, res) => {
  res.json({ message: 'Deploy me' });
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
