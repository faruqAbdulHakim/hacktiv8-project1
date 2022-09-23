if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const router = require('./routers');
const pool = require('./config/DBConnection');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
