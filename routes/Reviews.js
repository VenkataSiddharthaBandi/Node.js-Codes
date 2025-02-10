
const express = require("express");

const router = express.Router();

router.get("/",(req,res) => {
    res.send("This is from Review");
});

module.exports = router;

