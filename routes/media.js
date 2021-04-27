const express = require('express');
const router = express.Router();

const { getAllMedia } = require('../utils/commons/mediaHandler');

router.get('/', async (req,res) => {
    try {
        const data = await getAllMedia();

        res.json({
            "data" : data
        })
    } catch (error) {
       console.log(error); 
    }
    
});

module.exports = router;