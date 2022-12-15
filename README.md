# hacktiv8-project1

## DOCUMENTATION API
<p> Dokumentasi untuk API project1 - hacktiv8 reflection API </p>

<p> Project ini digunakan sebagai syarat memenuhi kebutuhan akademik pada program MSIB kampus merdeka dengan mitra Hacktiv8 </p>

## CLONE REPOSITORY
```bash
$ git clone <remote_repo> (ex: git clone https://github.com/faruqAbdulHakim/hacktiv8-project1.git)
```

## HOW TO RUN

```bash
$ npm install (to install dependencies on the project stored in package.json)
# step pertama : rename .env.example to .env
# step kedua : isi dari variabel pada .env sesuai dengan local anda dari database dan secret token
```

## HOW TO SETUPDATABASE
<p>Buat database postgre didalam local komputer ex-sql: CREATE DATABASE reflection_db</p>

```bash
$ npm run migrate (to create dan migration table in database)
```

| name           | docs                              |
| -------------- | --------------------------------- |
| USERS DOCS      | [Users](./docs/users.md)          |
| REFLECTIONS DOCS      | [Reflections](./docs/reflections.md)          |