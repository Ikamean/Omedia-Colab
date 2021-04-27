const media = require('../../MongoDB/models/media');

const getAllMedia = async () => {
    return await media.find({});
}

module.exports = { getAllMedia }