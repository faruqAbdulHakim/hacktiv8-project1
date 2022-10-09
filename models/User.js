const pool = require('./../config/DBConnection');
const hashPassword = require('./../helpers/bcrypt');

class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password
  };


  /**
   * @param {string} email
   * @param {string} password
   * @return {Promise<User | {success?: boolean, error?: Error}>}
   */
  static async register(email, password) {
    try {
      const hashing = hashPassword.cryptPassword(password)
      const register = await pool.query(`
        INSERT INTO users (email, password) 
          VALUES ($1, $2) 
          RETURNING *;`, [email, hashing]
      );
      return new User(register.rows[0].id, register.rows[0].email, register.rows[0].password)
    } catch (error) {
      return { success: false, error }
    }
  }


  /**
   * @param {string} email
   * @return {Promise<User | {success?: boolean, error?: Error}>}
   */
  static async login(email) {
    try {
      const login = await pool.query(`
      SELECT id, email, password 
        FROM users WHERE email = $1;`,[email]
      );
      return new User(login.rows[0].id, login.rows[0].email, login.rows[0].password)
    } catch (error) {
        return { success: false, error }
    }
  }
}

module.exports = User;
