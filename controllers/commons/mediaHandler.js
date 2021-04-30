const media = require('../../MongoDB/models/media');

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

const editMediaTitle = async ( mediaId, userId, newTitle ) => {
    const author = await getUser(userId);

    const updatedMedia = await media.findOneAndUpdate({ _id : mediaId }, { $set : { title : newTitle } }, { returnOriginal: false } );
    

    await editAuthorVideoTitle( author, updatedMedia );   
    
    return updatedMedia
}

    /**
     * 
     * @param {Array} userVideos 
     * @param {Object} updatedMedia 
     * @returns updates author videos array
     */
const editAuthorVideoTitle = async ( author, updatedMedia ) => {
     const authorUpdatedVideos = author.videos.map( video => JSON.stringify(video._id) === JSON.stringify(updatedMedia._id) ? updatedMedia : video );

     author.videos = authorUpdatedVideos;
    
    return await author.save();

}


module.exports = { getAllMedia, deleteMediaById, getMediaById, editMediaTitle }