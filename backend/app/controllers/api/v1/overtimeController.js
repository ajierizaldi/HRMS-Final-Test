const model = require('../../../models')

module.exports = {
    getOvertime: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    },
    createOvertime: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    },
    approvalOvertime: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    },
    rejectOvertime: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
                data: null
            })
        }
    },
    deleteOvertime: async (req, res) => {
        try {

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