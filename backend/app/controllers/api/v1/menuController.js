const model = require('../../../models');

module.exports = {
    getRoleMenuEmployee: async (req, res) => {
        try {
            const getEmployeeMenu = await model.Menu.findAll({
                where: {
                    role: 'employee'
                }
            })

            return res.status(200).json({
                message: 'Employee Menu was successfully retrieved',
                success: true,
                error: null,
                data: getEmployeeMenu
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    },
    getRoleMenuHR: async (req, res) => {
        try {
            const getHRMenu = await model.Menu.findAll({
                where: {
                    role: 'hr'
                }
            })

            return res.status(200).json({
                message: 'HR Menu was successfully retrieved',
                success: true,
                error: null,
                data: getHRMenu
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    },
    createMenu: async (req, res) => {
        try {
            const createMenu = await model.Menu.create({
                name: req.body.name,
                url: req.body.url,
                role: req.body.role
            })

            return res.status(201).json({
                message: 'Menu was successfully created',
                success: true,
                error: null,
                data: createMenu
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    }
}