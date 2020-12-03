const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.get('/get/:user_id', controller.GetAccount)
//http://localhost:3001/api/account/get/:user_id

Router.post('/create', controller.CreateAccount)
//http://localhost:3001/api/account/create

module.exports = Router