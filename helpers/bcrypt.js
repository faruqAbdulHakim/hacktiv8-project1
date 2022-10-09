const bcrypt = require('bcrypt');

const encrypt = {
  /**
   * Fungsi yang digunakan untuk mengenkripsi password
   * @param {string} password 
   * @returns {string}
   */
  cryptPassword: (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  },
  
  /**
   * Fungsi yang digunakan untuk mengkomparasi apakah password valid
   * @param {string} password 
   * @param {string} hashPassword 
   * @returns {boolean}
   */
  comparePassword: (password, hashPassword) => {
    const compare = bcrypt.compareSync(password, hashPassword)
    return compare
  }
}

module.exports = encrypt;