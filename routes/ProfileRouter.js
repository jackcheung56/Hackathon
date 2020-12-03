const Router = require('express').Router()
const controller = require('../controllers/ProfileController')

Router.get('/get/:account_id', controller.GetProfile)
//http://localhost:3001/api/profile/get/:account_id

Router.post('/create', controller.CreateProfile)
//http://localhost:3001/api/profile/create

module.exports = Router