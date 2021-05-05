const media = require('../../MongoDB/models/media');

const fs = require('fs');

const { getUser } = require('./getUser');

    /**
     * 
     * @returns gets and filters videos, returns only public videos back.
     */
const getAllMedia = async () => {
    let publicMedia = await media.find({});

    
    return publicMedia.filter( media => media.private !== true );
}

    /**
     * 
     * @param {String} id 
     * @returns Media by ID.
     */
const getMediaById = async (id) => {
    return await media.findOne({ _id : id });
}


    /**
     * 
     * @param { String } mediaId 
     * @param { String } userId 
     * @returns Handles Delete Request, Returns Updated Media Array and Author.videos Array without specific media element
     */
const deleteMediaById = async (mediaId, userId) => {
    let author = await getUser(userId);


    const updatedVideos = updateAuthorVideos(author.videos, mediaId);

    
    author.videos = updatedVideos;

   
    
    await author.save();

    return await media.findOneAndDelete({ _id : mediaId });
}


    /**
     * 
     * @param { Array } userVideos 
     * @param { String} mediaId 
     * @returns find specific id and removes it from array, returns updated author videos array
     */
const updateAuthorVideos = ( userVideos, mediaId ) => {
    return userVideos.filter( video => JSON.stringify(video._id) !== JSON.stringify(mediaId) );
}


    /**
     * 
     * @param {String} mediaId 
     * @param {String} userId 
     * @param {String} newTitle 
     * @returns Updated Media with new title ..
     */

    const paramExists = (param) => {
        return param !== null;
    }

const updateMedia = async ( mediaId, userId, newTitle, newThumbnail, private ) => {
    const author = await getUser(userId);

    const hasTitle = paramExists(newTitle);
    const hasThumbnail = paramExists(newThumbnail);
    const hasPrivate = paramExists(private);

    let updatedMedia = '';

    // If 3 params are present update all of them

    if( hasTitle && hasThumbnail && hasPrivate ){
        updatedMedia = await media.findOneAndUpdate({ _id : mediaId }, { $set : { title : newTitle, thumbnail : newThumbnail, private : private } }, { returnOriginal: false } );
    }

    /*
    // If 2 Params are present update 2 of them

     //  Title and Thumbnail

    if ( hasTitle && hasThumbnail && !hasPrivate ) {
        updatedMedia = await media.findOneAndUpdate({ _id : mediaId }, { $set : { title : newTitle, thumbnail : newThumbnail } }, { returnOriginal: false } );
    }
    
     // Title and Private

    if ( hasTitle && !hasThumbnail && hasPrivate ) {
        updatedMedia = await media.findOneAndUpdate({ _id : mediaId }, { $set : { title : newTitle,  private : private } }, { returnOriginal: false } );
    }

     // Thumbnail and Private 

    if ( !hasTitle && hasThumbnail && hasPrivate ) {
        updatedMedia = await media.findOneAndUpdate({ _id : mediaId }, { $set : { thumbnail : newThumbnail, private : private } }, { returnOriginal: false } );
    }

    //  if 1 Param is present update only 1

    * */
    

    await editAuthorVideo( author, updatedMedia );   
    
    return updatedMedia
}

    /**
     * 
     * @param {Array} userVideos 
     * @param {Object} updatedMedia 
     * @returns updates author videos array
     */
const editAuthorVideo = async ( author, updatedMedia ) => {
     const authorUpdatedVideos = author.videos.map( video => JSON.stringify(video._id) === JSON.stringify(updatedMedia._id) ? updatedMedia : video );

     author.videos = authorUpdatedVideos;
    
    return await author.save();

}

// Convert file path for cloudinary API

const convertPath = (path) => {
    
    const fileName = path.split('/')[3];

    const fullPath = __dirname + '/tmpFolder/' + fileName;
    
    return fullPath;
}

/**
 * Removes Temporary File After uploading to cloudinary API
 */

const removeTempFile =  async (path) => {
    try {
       await  fs.unlink(path, (err) => {
            
            if(err){
                console.log(err);
                return 
            }
            
            console.log('Temporary File has been Removed');
        });

        
      } catch(err) {
        console.error(err)
        return err;
      }
}

module.exports = { getAllMedia, deleteMediaById, getMediaById, updateMedia, convertPath, removeTempFile }