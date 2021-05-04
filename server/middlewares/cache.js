const { client } = require('../Redis/redisConfig');
const { updateCache } = require('../controllers/commons/cacheHandler');

const cached = ( req, res, next ) => {

    client.get('media', async ( err, data ) => {
        if(err) console.error(err);

        if(data === null){
            const media = await updateCache('middleware working');

            return res.json({
                "cached" : false,
                "data" : media
            });
        }

        
        res.json({
            "cached" : true,
            "data" : JSON.parse(data)
        });
});
    next();
}

module.exports = { cached }