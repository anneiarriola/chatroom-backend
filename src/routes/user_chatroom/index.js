const { Router } = require('express');
const route = Router()

const chatController = require('../../controller/user_chatroom/index')

route.post('/joint-chat', chatController.validationChatRoom)


module.exports = route

