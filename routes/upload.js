const express = require('express');
const router = express.Router();


const { cloudUploader } = require('../Cloudinary/cloudUtils/cloud');

router.post('/', async ( req, res ) => {
    
    try {

    const fileData = req.files.mediaFile.data;
    const fileName = req.files.mediaFile.name;
    //const transformedMedia = JSON.stringify(media);

    
    //console.log(media);
    await cloudUploader(fileData)
    
    res.send('ok'); 

    } catch (error) {
        console.log(error);
    }
});


module.exports = router;