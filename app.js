if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const pool = require('./config/DBConnection');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola');
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
