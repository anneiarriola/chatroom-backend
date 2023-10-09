const { Router } = require('express');
const route = Router()

const userController = require('../../controller/users/index')

route.post('/create', userController.createUser)
route.get('/fetch', userController.getUser)

module.exports = route