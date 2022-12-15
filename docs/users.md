### register user
- digunakan untuk register user

| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| POST   | /api/v1/users/register | N    |

- value yang dikirimkan pada body

| name     |
| -------- |
| email |
| password |

- response json

```js
{
  message: "Register Success",
  account: "harwanto@gmail.com"
}
```

### login user
- digunakan untuk login user

| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| POST   | /api/v1/users/login | N    |

- value yang dikirimkan pada body

| name     |
| -------- |
| email |
| password |

- response json

```js
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYXJ3YW5"
}
```