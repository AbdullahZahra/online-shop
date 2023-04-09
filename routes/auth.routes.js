const express = require("express");

const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/signup", authController.getSignup);

router.post("/singup", authController.signup);

router.get("/login", authController.getLogin);

module.exports = router;