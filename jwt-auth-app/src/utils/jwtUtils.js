module.exports = {
    generateToken: (user) => {
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        return token;
    },

    verifyToken: (token) => {
        const jwt = require('jsonwebtoken');
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded;
        } catch (error) {
            return null;
        }
    }
};