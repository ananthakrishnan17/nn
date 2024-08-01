module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'development') {
        // Development mode: show full error details
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: err.stack,
            error: err
        });
    } else if (process.env.NODE_ENV === 'production') {
        let message = err.message;
        let error = { ...err };

        // Handle validation errors
        if (err.name === "ValidationError") {
            message = Object.values(err.errors).map(value => value.message).join(', ');
            error = new Error(message);
        }

        // Handle cast errors
        if (err.name === 'CastError') {
            message = `Resource not found: Invalid ${err.path}`;
            error = new Error(message);
        }

        res.status(err.statusCode).json({
            success: false,
            message: message || 'Internal Server Error',
        });
    }
};
