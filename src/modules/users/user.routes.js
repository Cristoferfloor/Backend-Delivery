const { Router } = require('express');
const UserController = require('./user.controller');

const router = Router();

router.post('/create', UserController.register);

module.exports = router;
