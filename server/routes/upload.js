const express = require('express');
const router = express.Router();
const fs = require('fs');



const media = require('../MongoDB/models/media');

const { cloudUploader } = require('../Cloudinary/cloudUtils/cloud');

const { getUser } = require('../controllers/commons/getUser');


router.post('/', async ( req, res ) => {
    
    try {
        
        const title = req.body.title;
        const private = req.body.private;
        const author = await getUser(req.session.userId);

        
        if(!req.files){
            return res.json({
                success: false,
                msg: "File Type should be multipart-form-data"
            });
        }

        const videoFullPath = convertPath(req.files.mediaFile.tempFilePath);
        const thumbnailFullPath = convertPath(req.files.thumbnail.tempFilePath);

        

        // uploads new file to cloudinary and responds with object
        const videoResp = await cloudUploader(videoFullPath);
        const thumbnailResp = await cloudUploader(thumbnailFullPath);


        // save file to mongoDB and update author videos array.
        const uploadedFile = await saveNewMedia(title, private, author, videoResp, thumbnailResp);


        // Removes Temporary file after uploading
        if(videoResp && thumbnailResp){
            await removeTempFile(videoFullPath);
            await removeTempFile(thumbnailFullPath);
        }

        
        res.json(uploadedFile); 

    } catch (error) {
        console.log(error);
    }
});

/**
 * 
 * @param  {String} path
 * @returns get full path for cloudinary api
 */

const convertPath = (path) => {
    
    const fileName = path.split('/')[2];

    const fullPath = __dirname + '/tmpFolder/' + fileName;
    
    return fullPath;
}

/**
 * Removes Temporary File After uploading to cloudinary API
 */
const removeTempFile =  async (path) => {
    try {
       await  fs.unlink(path, (err) => {
            
            if(err) 
                console.log(err);
                return 
                
        });

        
      } catch(err) {
        console.error(err)
        return err;
      }
}

/**
 * 
 * @param {String} title 
 * @param {String} private 
 * @param {String} author 
 * @param {Object} cloudinaryRes 
 * 
 * saves uploaded media file to MongoDB.
 */
const saveNewMedia = async ( title, private, author , videoResp, thumbnailResp ) => {
    

    const newMedia = media({
        author: author.userName,
        url: videoResp.secure_url,
        thumbnail: thumbnailResp.secure_url,
        title: title,
        private: private,
        created: formatedDate()
    });

    // Updating Author Object Video array
    const updatedAuthorVideos = [...author.videos, newMedia]
    author.videos = updatedAuthorVideos;
   
    await author.save();

    // responding with freshly created File
    return await newMedia.save();

}

const formatedDate = () => {
    return Date().split(' ').splice(0,5).join('-');
}

module.exports = router;