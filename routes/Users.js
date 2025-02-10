
const express = require("express");

const router = express.Router();

router.get("/users/:(id[0-9]{4})",(req,res) => {
    res.send("The userId is :" + req.params.id);
});

router.get("*",(req,res) => {
    res.send("bs");
})


module.exports = router;