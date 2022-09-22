const pool = require('./../config/DBConnet')

async function tb_users () { 
  await pool.query(`
  CREATE TABLE tb_users (
    id serial PRIMARY KEY,
    email varchar,
    password varchar
    );`
  );
  console.log('migration users sukses');
};

async function tb_reflections () {
  await pool.query(`
  CREATE TABLE tb_reflections (
    id serial PRIMARY KEY,
    success varchar,
    low_point varchar,
    take_away varchar,
    owner_id int,
    created_date timestamp,
    modified_date timestamp,
    CONSTRAINT fk_users
      FOREIGN KEY (owner_id)
      REFERENCES tb_users(id)
    );`
  );
  console.log('migration reflection sukses');
};

async function addUnique() {
  await pool.query(`
  ALTER TABLE tb_users ADD CONSTRAINT email_unique UNIQUE (email)
  `)
  console.log('Berhasil membuat unique')
}

// panggil fungsi untuk melakukan migration dan run file migrations.js


// tb_users();
// tb_reflections();
// addUnique(); 