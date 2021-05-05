
const { getAllMedia } = require('./mediaHandler');
const { client } = require('../../Redis/redisConfig');

/**
 * 
 * @param {string} message 
 * @returns all media from mongoDB and updates cache.
 */

const updateCache = async (message) => {
    const media = await getAllMedia();
               
        client.setex('media', 3600, JSON.stringify(media), (err) => {
            if(err) console.error(err);
            
        });

        console.log('Created new cache : =>>>>> ' + message, 'Media Length =>>>' , media.length);
        return media;
}

module.exports = { updateCache }