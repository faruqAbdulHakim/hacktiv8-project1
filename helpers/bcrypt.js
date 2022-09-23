const bcrypt = require('bcrypt');

const encrypt = {
  cryptPassword: (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  },
  comparePassword: (password, hashPassword) => {
    const compare = bcrypt.compareSync(password, hashPassword)
    return compare
  }
}

module.exports = encrypt;