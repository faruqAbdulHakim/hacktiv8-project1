if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const express = require('express');
const connection = require('./config/DBConnet')
const app = express();
const port = process.env.PORT || 3000;

connection

app.get('/', (req, res) => {
  res.send('Hola');
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});