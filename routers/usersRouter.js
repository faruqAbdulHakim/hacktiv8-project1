const router = require("express").Router();

router.post('/login', (req, res) => {
  res.status(501).json({ message: "berhasil" });
});

router.post('/register', (req, res) => {
  res.status(501).json({ message: "berhasil" });
});

module.exports = router;