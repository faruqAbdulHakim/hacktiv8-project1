const router = require('express').Router();
const usersRouter = require('./usersRouter.js');
const reflectionsRouter = require('./reflectionsRouter.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const errorMiddleware = require('../middlewares/errorMiddleware.js');

router.use('/api/v1/users', usersRouter);
router.use('/api/v1/reflections', authMiddleware, reflectionsRouter);

router.use((req, res, next) => {
  next({ name: 'PageNotFound' });
});

router.use(errorMiddleware);

module.exports = router;
