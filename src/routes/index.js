const { Router } = require('express');

const router = Router();

const message = require('./messages/index')
const user = require('./users/index')
const chatroom = require('./chatroom/index')
const user_chatroom = require('./user_chatroom/index')

router.use('/message', message)
router.use('/users', user)
router.use('/chatroom', chatroom)
router.use('/user_chatroom', user_chatroom)

module.exports = router