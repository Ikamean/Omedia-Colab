
const { getAllMedia } = require('./mediaHandler');
const { client } = require('../../Redis/redisConfig');

const updateCache = async (data) => {
    const media = await getAllMedia();
               
        client.set('media', JSON.stringify(media), (err) => {
            if(err) console.error(err);
            
        });
        console.log('Created new cache : =>>>>> ' + data, media.length);
        return media;
}

module.exports = { updateCache }