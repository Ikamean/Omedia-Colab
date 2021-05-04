const express = require('express');
const router = express.Router();
const redirectLogin = require('../middlewares/redirectLogin');

const { myEmitter } = require('../Event/emitter');



// Redis //

const { client } = require('../Redis/redisConfig');

const { getAllMedia, deleteMediaById, getMediaById, editMediaTitle } = require('../controllers/commons/mediaHandler');

    
/**
 Listening to Upload / Delete / Put requests and updating cache if they get executed.
*/
myEmitter.on('updateCache', async (data) => {
        const media = await getAllMedia();
               
        client.set('media', JSON.stringify(media), (err) => {
            if(err) console.error(err);
            
        });
        console.log('Created new cache: ' + data, media.length);
});


router.get('/', async (req,res) => {
    try {
         
        client.get('media', async ( err, data ) => {
            if(err) console.error(err);

            if(data === null){
                const media = await getAllMedia();
               
                client.set('media', JSON.stringify(media), (err) => {
                    if(err) console.error(err);
                    
                });

                return res.json({
                    "cached" : false,
                    "data" : media
                });
            }

            
            res.json({
                "cached" : true,
                "data" : JSON.parse(data)
            });
        })

        
    } catch (error) {
       console.log(error); 
       res.send(500);
    }
    
});



    /*
        Handle Media delete request by Media Id parameter present in URL,   
    */

router.delete('/delete/:id', redirectLogin, async (req,res) => {

    try {
        const media = await getMediaById(req.params.id);
        const userName = req.session.userName;
        const userId = req.session.userId;

        
        if(!media){
            return res.send('No media by that ID');
        }

        if( media.author === userName ){
            await deleteMediaById( req.params.id, userId );

            myEmitter.emit('updateCache', 'document deleted, create new cache');

            return res.send('Deletion Success')
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
    const media = await getMediaById(req.params.id);
    const userName = req.session.userName;
    const userId = req.session.userId;


    if(!media){
        return res.status(404).send('Media Not Found');
    }

    if( media.author === userName ){
        const updatedMedia = await editMediaTitle( media.id , userId, newTitle );

        myEmitter.emit('updateCache', 'document updated, create new cache');

        return res.json(updatedMedia);
    }

    res.sendStatus(403);
})

module.exports = router;