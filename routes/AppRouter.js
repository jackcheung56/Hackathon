const Router = require('express').Router()
const UserRouter = require ('./UserRouter')
const AccountRouter = reuqire ('./AccountRouter')

Router.use('/user', UserRouter)
Router.use('/account', AccountRouter)

module.exports = Router