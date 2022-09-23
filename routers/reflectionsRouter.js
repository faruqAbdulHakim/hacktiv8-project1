const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(501).json({ message: "berhasil" });
});

router.post('/', (req, res) => {
    res.status(501).json({ message: "berhasil" });
});

router.put('/:id', (req, res) => {
    res.status(501).json({ message: "berhasil" });
});

router.delete('/:id', (req, res) => {
    res.status(501).json({ message: "berhasil" });
});

module.exports = router; 