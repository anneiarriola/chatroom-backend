const { Router } = require('express');
const route = Router()

const userController = require('../../controller/users/index')

route.get('/hello', userController.helloFromUser)
route.get('/bye', userController.byeFromUser)

module.exports = route