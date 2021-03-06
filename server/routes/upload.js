const express = require('express');
const router = express.Router();


const { myEmitter } = require('../Event/emitter');

const media = require('../MongoDB/models/media');

const { cloudUploader } = require('../Cloudinary/cloudUtils/cloud');

const { getUser } = require('../controllers/commons/getUser');
const { convertPath, removeTempFile } = require('../controllers/commons/mediaHandler');


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

        myEmitter.emit('updateCache', 'new document has been added, create new cache.');

        console.log('Upload : =>>>>>>>>>> Files Has been Uploaded');

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

module.exports =  router ;