const express = require('express');
const router = express.Router();

const { getUser } = require('../utils/commons/getUser');

/**
    Get Current loggeded user By ID;
*/
router.get('/me', async ( req, res ) => {
    
    try {
        const userId = req.session.userId;
        const loggedUser = await getUser(userId);

        res.json({
            userName: loggedUser.userName,
            userId : loggedUser.id,
            videos: loggedUser.videos
        });

    } catch (error) {
        console.log(error);
        return null;
    }


});

module.exports = router;