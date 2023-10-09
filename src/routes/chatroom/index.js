const { Router } = require('express');
const route = Router()

const chatController = require('../../controller/chatroom/index')

route.post('/create', chatController.createChatRoom)

module.exports = route

