const { Router } = require('express');

const authController = require('./app/controllers/authController');
const ReadingFileController = require('./app/controllers/ReadingFileController');

const authorization = require('./app/middleware/authentication'); //Off middleware
const multer = require('./app/middleware/multer');

const router = Router();

router.get('/auth', authController.login);
// router.get('/authAll', authorization, authController.index);
// router.post('/auth', authController.store);

router.get('/logs', ReadingFileController.index);
router.post('/searchlogs', ReadingFileController.store);

module.exports = router;