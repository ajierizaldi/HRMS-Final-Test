const roleChecker = (req, res, next) => {
    try {
        let roleUser = [roleA, roleB]

        if (roleUser.includes(res.locals.user.role)) {
            next()
        } else {
            return res.status(403).json({
                message: 'Forbidden Access',
                success: false,
                error: 403,
                data: null
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message,
            data: null
        })
    }
}

module.exports = roleChecker