const model = require('../../../models');

module.exports = {
    absent: async (req, res) => {
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
    afterWork: async (req, res) => {
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
    getAttend: async (req, res) => {
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