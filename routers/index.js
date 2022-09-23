const router = require("express").Router();
const usersRouter = require('./usersRouter.js');
const reflectionsRouter = require('./reflectionsRouter');

router.use('/api/v1/users',usersRouter);
router.use('/api/v1/reflections',reflectionsRouter);

module.exports = router;
