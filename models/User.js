const pool = require('./../config/DBConnection');
const hashPassword = require('./../helpers/bcrypt');

class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password
  };

  static async register(email, password) {
    const hashing = hashPassword.cryptPassword(password)
    try {
      const register = await pool.query(`
        INSERT INTO users (email, password) 
          VALUES ($1, $2) 
          RETURNING email, password;`, 
        [email, hashing]
      );
      return new User(register.rows[0].id, register.rows[0].email, register.rows[0].password)
    } catch (error) {
      return { success: false, error }
    }
  }
}

module.exports = User;
