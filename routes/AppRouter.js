const Router = require('express').Router()
const UserRouter = require ('./UserRouter')
const AccountRouter = require ('./AccountRouter')
const ProfileRouter = require ('./ProfileRouter')

Router.use('/user', UserRouter)
Router.use('/account', AccountRouter)
Router.use('/profile', ProfileRouter)

module.exports = Router

