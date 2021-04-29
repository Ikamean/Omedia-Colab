const express = require('express');
const router = express.Router();

const { validateUser, getUser } = require('../controllers/auth/UserHandler');

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

    /*
        Save userId in the session store for future identity use..
    */
    req.session.userId = loggedUser.id;
    req.session.userName = loggedUser.userName;


    let responseData = {
        "success": true,
        "data": {
            userName: loggedUser.userName,
            userId: loggedUser.id,
            email: loggedUser.email,
            videos: loggedUser.videos
        }
    }

    res.status(200).json(responseData);
})


module.exports = router;