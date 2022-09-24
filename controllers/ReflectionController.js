const Reflection = require("../models/Reflection.js");

class ReflectionController {
    static async create(req, res) {
        const { success, low_point, take_away } = req.body;
        try {
            const reflection = await Reflection.create(success, low_point, take_away, req.user.id);
            res.status(200).json(reflection);
        } catch (error) {
            res.status(500).json({ message: "internal server error" });
        }
    }

    static async findAll(req, res, next) {
        try {
            const reflection = await Reflection.findAll(req.user.id)
            res.status(200).json(reflection);
        } catch (error) {
            res.status(500).json({ message: "internal server error" });
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params;
        try {
            const reflection = await Reflection.delete( id )
            // if (!photo) throw { name: 'ErrNotFound' };
            res.status(200).json(reflection);
        } catch (error) {
            console.log(error);
            // res.status(500).json({ message: "internal server error" });
        }
    }

    // static async update(req, res, next) {
    //     const { id } = req.params;
    //     const { success, low_point, take_away } = req.body;
    //     const data = { success, low_point, take_away }
    //     try {
    //         const reflection = await Reflection
    //         .update(data, {
    //             where: {
    //                 id
    //             },
    //             returning: true
    //             })
    //         res.status(200).json(reflection);
    //     } catch (error) {
    //         res.status(500).json({ message: "internal server error" });
    //     }
    // }
}

module.exports = ReflectionController;