const authorizedroles = (...roles) => {          // FIX: added ...roles parameter (was missing)
    return (req, res, next) => {                 // FIX: added actual logic (function was completely empty)
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
};

module.exports = authorizedroles;               // FIX: was "export.modules" — wrong syntax, should be "module.exports"
