const { Account } = require('../models')

const CreateAccount = async (req, res) => {
    try {
        const account = await Account.create({
            ...req.body
        })
        res.send(account)
    } catch (error) {
        throw error
    }
}

const GetAccount = async (req, res) => {
    try{
        const accountId = parseInt(req.params.user_id)
        const account = await Account.findByPk(req.params.user_id, {
            where: {
                id: accountId
            },
            returning: true
        })
        res.send(account)
    } catch(error) {
        throw error
    }
}

module.exports ={
    CreateAccount,
    GetAccount
}