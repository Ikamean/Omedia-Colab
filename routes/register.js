const express = require('express');
const router = express.Router();


const { findIfExists, addUser } = require('../utils/auth/UserHandler');
const { validatePassword, parseUserName, validateEmail } = require('../utils/auth/validateInput');


router.post('/', async (req,res) => {
    try {
        /*
            parseUserName parses any white space inside userName input field.
        */
        const name = parseUserName(req.body.userName);
        const pass = req.body.password;
        const email = req.body.email;


        /*
            Required Checker functions for user input to validate fields.
        */
        const exists = await findIfExists(name) || await validateEmail(email);
        const isValid = validatePassword(pass);
       


        // Checking if userName allready exists
        if(exists){
            return res.status(409).send(`Username or Email allready taken`)
        }

       // adding new user to the database and returning response.
        if(isValid){
            await addUser(name,pass,email);

            return res.sendStatus(201);
        }

         
        
        return res.send('Password must start with letter and must be min 8 characters long');
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})


module.exports = router;