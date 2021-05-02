const express = require('express');
const router = express.Router();

const store = require('../MongoDB/SessionStore/mongoStore');

router.post('/', async (req,res) => {
    /**
        Removes user Session in Store with given session id 
    */


    const sid = req.session.id;


    await store.destroy(sid, err => {
        if(err){
            console.log(err);
            return null;
        }
    });

    
    /*
        Removing Cookie in client browser. 
    */
    req.session.cookie.expires = new Date().getTime();
    let cookieKey = req.headers.cookie.split('=')[0];
    res.clearCookie(cookieKey);

    res.send(`user  loggged out`)
})

module.exports = router;