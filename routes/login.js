const express = require('express');
const router = express.Router();

const { validateUser } = require('../utils/UserHandler');

router.post('/', async (req,res) => {
    const name = req.body.userName;
    const pass = req.body.password;

    let validation = await validateUser(name,pass);
    if(!validation){
        res.status(403).send('Wrong Credentials');
    }
    res.send(name);
})


module.exports = router;