const media = require('../../MongoDB/models/media');

/**
 * 
 * @returns gets and filters videos, returns only public videos back.
 */
const getAllMedia = async () => {
    let publicMedia = await media.find({});

    
    return publicMedia.filter( media => media.private !== true );
}


module.exports = { getAllMedia }