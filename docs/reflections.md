### KETERANGAN
- digunakan untuk register user
- auth: keterangan untuk setiap enpoint yang diakses harus melakukan login dan memiliki akses token


### Create Reflection
| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| POST   | /api/v1/reflection       | Y    |

- value yang dikirimkan pada body

| body (json) |
| ----------- |
| success     |
| low_point   |
| take_away   |
| owner_id    |

- response json

```js
{
  success: true,
  count: 1
}
```

### Get All Reflection
- Akan mendapatkan semua data reflection sesuai dengan ownernya

| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| GET   | /api/v1/reflection        | Y    |

- response json

```js
{
  success: true,
  result: [
      {
          id: 3,
          success: "Project Hacktiv8 2",
          low_point: "Low Point",
          take_away: "Take Away",
          owner_id: 2,
          created_date: "2022-10-07T14:07:49.058Z",
          modified_date: "2022-10-07T14:07:49.058Z"
      }
  ]
}
```

### Edit data Reflection
- Mengedit data reflection sesuai dengan parameter id

| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| PUT    | /api/v1/reflection/:id   | Y    |

- value yang dikirimkan pada body

| body (json) |
| ----------- |
| success     |
| low_point   |
| take_away   |

- response json

```js
{
  id: 6,
  success: "done",
  low_point: "lowpoint banget",
  take_away: "take away",
  owner_id: 3,
  created_date: "2022-10-13T16:11:10.849Z",
  modified_date: "2022-10-13T16:11:10.849Z"
}
```

### Hapus data Reflection
- Mengahpus data reflection sesuai dengan paramter id

| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| DELET  | /api/v1/reflection/:id   | Y    |

- response json

```js
{
  success: true,
  count: 1
}
```