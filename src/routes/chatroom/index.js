const { Router } = require('express');
const route = Router()

const chatController = require('../../controller/chatroom/index')

route.post('/create', chatController.createChatRoom)
route.get('/fetch', chatController.getChatRoom)

module.exports = route

