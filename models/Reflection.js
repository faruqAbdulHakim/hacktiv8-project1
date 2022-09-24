const pool = require('../config/DBConnection');

/**
 * @typedef {{
 *  id: number,
 *  success: string,
 *  take_away: string,
 *  owner_id: string,
 *  created_date: string,
 *  modified_date: string
 * }} reflectionRow
 */

class Reflection {
  /**
   * @param {string} success
   * @param {string} low_point
   * @param {string} take_away
   * @param {number} owner_id
   * @return {void}
   */
  constructor(success, low_point, take_away, owner_id) {
    this.success = success;
    this.low_point = low_point;
    this.take_away = take_away;
    this.owner_id = owner_id;
  }

  /**
   * @param {number} owner_id
   * @return {Promise<{success: boolean, error?: Error}>}
   */
  static async create(success, low_point, take_away, owner_id) {
    try {
      const reflection = await pool.query(
        `
          INSERT INTO reflections(success, low_point, take_away, owner_id)
          VALUES
            ($1, $2, $3, $4);
        `,
        [success, low_point, take_away, owner_id]
      );
      return { success: true, result: reflection.rows };
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   *
   * @param {number} owner_id
   * @return {Promise<{success: boolean, result: reflectionRow[], error?: Error}>}
   */
  static async findAll(owner_id) {
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
   * @param {number} reflectionId
   * @param {number} ownerId
   * @param {Reflection} reflection
   * @return {Promise<{success: boolean, rowCount?: number error?: Error}>}
   */
  static async update(reflectionId, ownerId, reflection) {
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
          reflectionId,
          ownerId,
        ]
      );
      return { success: true, rowCount: queryResult.rowCount };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }

  /**
   *
   * @param {number} id
   * @param {number} owner_id
   * @return {Promise<{success: boolean, rowCount?:number, error?: Error}>}
   */
  static async delete(id, owner_id) {
    try {
      const queryResult = await pool.query(
        `DELETE FROM reflections WHERE id = $1 AND owner_id = $2`,
        [id, owner_id]
      );
      return { success: true, rowCount: queryResult.rowCount };
    } catch (error) {
      return { success: false, error };
    }
  }
}

module.exports = Reflection;
