const express = require('express');
const router = express.Router();
const redirectLogin = require('../middlewares/redirectLogin');

const { getAllMedia, deleteMediaById, getMediaById } = require('../controllers/commons/mediaHandler');

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

/**
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

            return res.send('Deletion Success')
        }
        
        res.status(403).send('Oopss, Cant Proceed Request. In order to delete media, you should be author of it.')

    } catch (error) {
        console.log(error);
        res.send(error)
    }
    
})

module.exports = router;