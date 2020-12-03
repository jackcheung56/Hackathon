const { User, Profile, Account } = require('../models')

const CreateUser = async (req, res) => {
    try {
        const user = await User.create({
            ...req.body
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const GetUser = async (req, res) => {
    try{
        const userId = parseInt(req.params.id)
        const user = await User.findByPk(req.params.id, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(user)
    } catch(error) {
        throw error
    }
}

module.exports = {
    CreateUser,
    GetUser,
}