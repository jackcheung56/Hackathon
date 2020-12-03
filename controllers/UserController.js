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

module.exports = {
    CreateUser,
}