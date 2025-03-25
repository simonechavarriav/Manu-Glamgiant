exports.roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        const user = req.user; // Assuming user info is attached to req by authMiddleware

        if (!user) {
            return res.status(403).json({ message: 'Access denied. No user found.' });
        }

        if (user.role !== requiredRole) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next();
    };
};