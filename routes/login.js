const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    const name = req.body.userName;
    const pass = req.body.password;

    console.log(name,pass);
})


module.exports = router;