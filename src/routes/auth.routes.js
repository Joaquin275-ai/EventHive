const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");
const { limitadorLogin } = require("../middlewares/rateLimiter.middleware");

router.post("/login", limitadorLogin, login);

module.exports = router;