const express = require('express');
const router = express.Router();


const { findIfExists, addUser } = require('../utils/UserHandler');
const { validatePassword, parseUserName } = require('../utils/validateInput');


router.post('/', async (req,res) => {
    try {
        const name = parseUserName(req.body.userName);
        const pass = req.body.password;
        const exists = await findIfExists(name);
        const isValid = validatePassword(pass);


        // Checking if userName allready exists
        if(exists){
            return res.status(409).send(`Username ${name} allready taken`)
        }

        // Check if password is valid
        if(!isValid){
            return res.send('Password must start with letter and must be min 8 characters long');
        }

        // adding new user to the database and returning response.
        await addUser(name,pass);

        return res.status(201)
        .json({ 
            success: "201 ok, Created",
            username : name 
        });
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})


module.exports = router;