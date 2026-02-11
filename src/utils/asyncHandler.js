const asyncHandler = (func) => async (err, req, res, next) => {
    try {
        await func(err, req, res, next)
    } catch (error) {
        res.status(error.code).json({
            success: false,
            message: err.message
        })
    }
}