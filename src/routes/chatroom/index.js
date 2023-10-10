const { Router } = require('express');
const route = Router()

const chatController = require('../../controller/chatroom/index')

route.post('/create', chatController.createChatRoom)
route.get('/fetch', chatController.getChatRoom)
route.get('/connect/:id', chatController.connectChatRoom)

module.exports = route

