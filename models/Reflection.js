const pool = require('../config/DBConnection');

/**
 * @typedef {{
 *  id: number,
 *  success: string,
 *  take_away: string,
 *  owner_id: string,
 *  created_date: string,
 *  modified_date: string
 * }} ReflectionRow
 */

class Reflection {
  /**
   *
   * @param {string} success
   * @param {string} low_point
   * @param {string} take_away
   * @param {string} owner_id
   * @return {Promise<{success: boolean, count?: number, error?: Error}>}
   */
  static async create(success, low_point, take_away, owner_id) {
    try {
      const reflection = await pool.query(
        `
          INSERT INTO reflections(success, low_point, take_away, owner_id)
          VALUES
            ($1, $2, $3, $4)
          RETURNING *;
        `,
        [success, low_point, take_away, owner_id]
      );
      return { success: true, count: reflection.rowCount };
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   *
   * @param {number} owner_id
   * @return {Promise<{success: boolean, result?: ReflectionRow[], error?: Error}>}
   */
  static async findByOwnerId(owner_id) {
    try {
      const queryResult = await pool.query(
        `
          SELECT id, success, low_point, take_away, owner_id, created_date, modified_date
          FROM reflections
          WHERE owner_id = $1;
      `,
        [owner_id]
      );

      return { success: true, result: queryResult.rows };
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   *
   * @param {number} id
   * @return {Promise<{success: boolean, result?: ReflectionRow[], error?: Error}>}
   */
  static async findById(id) {
    try {
      const queryResult = await pool.query(
        `
        SELECT id, success, low_point, take_away, owner_id, created_date, modified_date
        FROM reflections
        WHERE id = $1
      `,
        [id]
      );

      return { success: true, result: queryResult.rows };
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   *
   * @param {number} reflection_id
   * @param {number} owner_id
   * @param {{
   *  success: string,
   *  low_point: string,
   *  take_away: string,
   * }} reflection
   * @return {Promise<{success: boolean, count?: number, error?: Error}>}
   */
  static async update(reflection_id, owner_id, reflection) {
    try {
      const queryResult = await pool.query(
        `
        UPDATE reflections
        SET 
          success = $1,
          low_point = $2, 
          take_away = $3, 
          modified_date = NOW()
        WHERE
          id = $4
          AND
          owner_id = $5
      `,
        [
          reflection.success,
          reflection.low_point,
          reflection.take_away,
          reflection_id,
          owner_id,
        ]
      );
      return { success: true, count: queryResult.rowCount };
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   *
   * @param {number} id
   * @param {number} owner_id
   * @return {Promise<{success: boolean, count?:number, error?: Error}>}
   */
  static async delete(id, owner_id) {
    try {
      const queryResult = await pool.query(
        `DELETE FROM reflections WHERE id = $1 AND owner_id = $2`,
        [id, owner_id]
      );
      return { success: true, count: queryResult.rowCount };
    } catch (error) {
      return { success: false, error };
    }
  }
}

module.exports = Reflection;
