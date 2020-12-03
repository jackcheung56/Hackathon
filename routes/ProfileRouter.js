const Router = require('express').Router()
const controller = require('../controllers/ProfileController')

Router.post('/create', controller.CreateProfile)
//http://localhost:3001/api/profile/create

module.exports = Router