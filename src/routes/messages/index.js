const { Router } = require('express');
const route = Router()

const messageController = require('../../controller/messages/index')

route.get('/hello', messageController.helloFromMessage)
route.get('/bye',messageController.byeFromMessage)



module.exports = route

