const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/create', controller.CreateUser)
//http://localhost:3001/api/user/create

module.exports = Router