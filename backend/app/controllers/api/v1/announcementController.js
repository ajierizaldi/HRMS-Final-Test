const model = require('../../../models')

module.exports = {
    getAnnouncement: async (req, res) => {
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
    getAnnouncementById: async (req, res) => {
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
    createAnnouncement: async (req, res) => {
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
    updateAnnouncement: async (req, res) => {
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
    destroyAnnouncement: async (req, res) => {
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