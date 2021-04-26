const express = require('express');
const router = express.Router();

const { validateUser } = require('../utils/auth/UserHandler');

router.post('/', async (req,res) => {
    const name = req.body.userName;
    const pass = req.body.password;

    /* 
        if Login Validation fails return Wrong Credentials and Exit !!!
    */
    let validation = await validateUser(name,pass);
    if(!validation){
        return res.status(403).send('Wrong Credentials');
    }

    
    res.send(name);
})


module.exports = router;