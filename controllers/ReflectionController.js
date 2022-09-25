const Reflection = require('../models/Reflection.js');

class ReflectionController {
  static async create(req, res, next) {
    try {
      const { success, low_point, take_away } = req.body;

      if (!success || !low_point || !take_away) throw { name: 'BadRequest' };

      const result = await Reflection.create(
        success,
        low_point,
        take_away,
        req.user.id
      );

      if (result.error) throw result.error;
      if (result.count === 0) throw { name: 'InternalServerError' };
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const result = await Reflection.findByOwnerId(req.user.id);

      if (result.error) throw result.error;
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Reflection.delete(id, req.user.id);

      if (result.error) throw result.error;
      if (result.count === 0) throw { name: 'ErrNotFound' };
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { success, low_point, take_away } = req.body;
      if (!success || !low_point || !take_away) throw { name: 'BadRequest' };

      const result = await Reflection.update(id, req.user.id, {
        success,
        low_point,
        take_away,
      });

      if (result.error) throw result.error;
      if (result.count === 0) throw { name: 'ErrNotFound' };
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReflectionController;
