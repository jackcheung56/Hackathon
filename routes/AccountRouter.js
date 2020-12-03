const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.get('/get/:id', controller.GetAccount)
//http://localhost:3001/api/account/get/1
Router.post('/create', controller.CreateAccount)
//http://localhost:3001/api/account/create

module.exports = Router