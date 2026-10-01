const rateLimit = require("express-rate-limit");

const limitadorLogin = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: "Demasiados intentos de login. Intenta de nuevo en unos minutos."
    },
});

module.exports = { limitadorLogin };