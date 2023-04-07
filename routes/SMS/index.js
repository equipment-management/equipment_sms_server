const express = require("express");
const router = express.Router();
const { sendVerificationSMS } = require("./message.js");

router.get("/", sendVerificationSMS);

module.exports = router;