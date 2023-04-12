const model = require('../../../models');
const jwt = require('jsonwebtoken');
const { compareSync } = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        try {
            const userExist = await model.user.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (!userExist) {
                return res.status(400).json({
                    message: 'User not found',
                    success: false,
                    data: null
                })
            }

            if (compareSync(req.body.password, userExist.password)) {
                const token = jwt.sign(
                    { id: userExist.id, email: userExist.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                )

                return res.status(200).json({
                    message: 'Login Success',
                    success: true,
                    data: {
                        token: token,
                    },
                    error: null
                })
            } else {
                return res.status(400).json({
                    message: 'Wrong Password',
                    success: false,
                    error: error.message,
                    data: null
                })
            }
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