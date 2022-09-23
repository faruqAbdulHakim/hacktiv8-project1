const router = require("express").Router();
const userController = require('./../controllers/usersController');
router.post('/login', (req, res) => {
  res.status(501).json({ message: "berhasil" });
});

router.post('/register', userController.register);

module.exports = router;