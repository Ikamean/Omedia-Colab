const express = require('express');
const router = express.Router();

const { validateUser, getUser } = require('../utils/auth/UserHandler');

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

    /*
        After Successfull login, server will response with user credentials.
    */
    const loggedUser = await getUser(name);
    req.session.userId = loggedUser.id;


    let responseData = {
        "success": true,
        "data": {
            userName: loggedUser.userName,
            userId: loggedUser.id,
            videos: loggedUser.videos
        }
    }

    res.status(200).json(responseData);
})


module.exports = router;