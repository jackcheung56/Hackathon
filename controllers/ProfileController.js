const { Profile } = require('../models')

const CreateProfile = async (req, res) => {
    try {
        const profile = await Profile.create({
            ...req.body
        })
        res.send(profile)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateProfile
}