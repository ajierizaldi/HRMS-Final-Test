const model = require('../../../models')
const { genSalt, hash } = require('bcrypt')

const cryptPassword = async (password) => { }

module.exports = {
    register: async (req, res) => {
        try {
            const data = await model.user.create({
                name: req.body.name,
                email: req.body.email,
                password: await cryptPassword(req.body.password),
                role: req.body.role,
            })

            return res.status(200).json({
                message: 'Register Success',
                success: true,
                data: data,
                error: null,
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null,
            })
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const findUsers = await model.user.findAll()

            return res.status(200).json({
                message: 'Get All Users Success',
                success: true,
                data: findUsers,
                error: null,
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null,
            })
        }
    },
    getUserById: async (req, res) => {
        try {
            const findUser = await model.user.findOne({
                where: {
                    name: req.params.name
                }
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null,
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const updateUser = await model.user.update({
                name: req.body.name,
                email: req.body.email,
                password: await cryptPassword(req.body.password),
                role: req.body.role,
            }, {
                where: {
                    id: req.params.id
                }
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null,
            })
        }
    },
    destroyUser: async (req, res) => {
        try {
            const deleteUser = await model.user.destroy({
                where: {
                    id: req.params.id
                }
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null,
            })
        }
    }
}