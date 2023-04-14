const model = require('../../../models')

module.exports = {
    getReimburse: async (req, res) => {
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
    createReimburse: async (req, res) => {
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
    approvalReimburse: async (req, res) => {
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
    rejectReimburse: async (req, res) => {
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
    deleteReimburse: async (req, res) => {
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