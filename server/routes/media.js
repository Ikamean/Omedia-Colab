const express = require('express');
const router = express.Router();
const redirectLogin = require('../middlewares/redirectLogin');

const { myEmitter } = require('../Event/emitter');

const { redisMiddleware } = require('../middlewares/redisMiddleware');
const { updateCache } = require('../controllers/commons/cacheHandler');


const {  deleteMediaById, getMediaById, updateMedia } = require('../controllers/commons/mediaHandler');

// handling Put request

const { convertPath } = require('../controllers/commons/mediaHandler');
const { cloudUploader } = require('../Cloudinary/cloudUtils/cloud');
    
/**
 Listening to Upload / Delete / Put requests and updating cache if they get executed.
*/
myEmitter.on('updateCache', async (data) => {
    await updateCache(data);
});


// get all media for home page, using caching middleware.

router.get('/', redisMiddleware, (req,res) => {});



    /*
        Handle Media delete request by Media Id parameter present in URL,   
    */

router.delete('/delete/:id', redirectLogin, async (req,res) => {

    try {
        const media = await getMediaById(req.params.id);
        const userName = req.session.userName;
        const userId = req.session.userId;

        
        
        if(!media){
            return res.send(404);
        }

        if( media.author === userName ){
            await deleteMediaById( req.params.id, userId );

            myEmitter.emit('updateCache', 'document deleted, create new cache');

            return res.send(200)
        }
        
        res.status(403).send('Oopss, Cant Proceed Request. In order to delete media, you should be author of it.')

    } catch (error) {
        console.log(error);
        res.send(error)
    }
    
});


    /*
        Handle Put request, Author can send New Title for video
     */
router.put('/edit/:id', redirectLogin, async ( req, res ) => {

    const newTitle = req.body.title;
    const private = req.body.private;
    let newThumbnail = '';

    const media = await getMediaById(req.params.id);
    const userName = req.session.userName;
    const userId = req.session.userId;

    
    // If request has new thumbnail update it.
    if( req.files ) {
        const thumbnailFullPath = convertPath(req.files.thumbnail.tempFilePath);
        const thumbnailResp = await cloudUploader(thumbnailFullPath);

        newThumbnail = thumbnailResp.secure_url;
    }
    // If no new thumbnails present, get old thumbnail url from request body object.
    if ( !req.files ) {
        newThumbnail = req.body.thumbnail;
    }

    if(!media){
        return res.status(404).send('Media Not Found');
    }

    if( media.author === userName ){
        const updatedMedia = await updateMedia( media.id , userId, newTitle, newThumbnail, private );

        myEmitter.emit('updateCache', 'document updated, create new cache');

        return res.json(updatedMedia);
    }

    res.sendStatus(403);
})

module.exports = router;