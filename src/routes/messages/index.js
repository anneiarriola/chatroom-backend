const { Router } = require('express');
const route = Router()

const messageController = require('../../controller/messages/index')

route.post('/create', messageController.createMessage)
route.get('/fetch', messageController.getAllMessages)

module.exports = route

