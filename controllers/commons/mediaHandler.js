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

const getMediaById = async (id) => {
    return await media.findOne({ _id : id });
}

const deleteMediaById = async (mediaId, userId) => {
    let author = await getUser(userId);

    

    const updatedVideos = removeMediaFromUserVideos(author.videos, mediaId);

    console.log('Updated User Videos Length', updatedVideos.length());
    console.log('primal length of user Videos', author.videos.length());
    
    //author.videos = updatedVideos;
    
    await author.save();

    return await media.findOneAndDelete({ _id : mediaId });
}

const removeMediaFromUserVideos = ( mediaArray, mediaId ) => {
    console.log();
    return mediaArray.filter( video => video._id !== mediaId );
}


module.exports = { getAllMedia, deleteMediaById, getMediaById }