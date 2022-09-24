const ReflectionController = require("../controllers/ReflectionController.js");
const router = require('express').Router();

router.get('/', ReflectionController.findAll);

router.post('/', ReflectionController.create);

// router.put('/:id', ReflectionController.update);

router.delete('/:id', (req, res) => {
    res.status(501).json({ message: "berhasil" });
});

module.exports = router;