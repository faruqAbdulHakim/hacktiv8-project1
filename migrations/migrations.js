if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const pool = require('../config/DBConnection');

async function migrate() {
  try {
    await pool.query('DROP TABLE IF EXISTS users CASCADE;');
    await pool.query('DROP TABLE IF EXISTS reflections CASCADE;');
    console.log('Success: DROP TABLE IF EXISTS');

    await pool.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR UNIQUE,
      password VARCHAR
    );`);
    console.log('Success: CREATE TABLE users');

    await pool.query(`
    CREATE TABLE reflections (
      id SERIAL PRIMARY KEY,
      success VARCHAR,
      low_point VARCHAR,
      take_away VARCHAR,
      owner_id INT REFERENCES users(id),
      created_date TIMESTAMP DEFAULT NOW(),
      modified_date TIMESTAMP DEFAULT NOW()
    );`);
    console.log('Success: CREATE TABLE reflections');

    console.log('Migrations Success');
  } catch (error) {
    console.error('Migrations Failed:', error.message);
  }
}

migrate();
