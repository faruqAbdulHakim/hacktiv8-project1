const ReflectionController = require("../controllers/ReflectionController.js");
const router = require('express').Router();

router.get('/', ReflectionController.findAll);

router.post('/', ReflectionController.create);

router.delete('/:id', ReflectionController.delete);
router.put('/:id', ReflectionController.update);


module.exports = router;