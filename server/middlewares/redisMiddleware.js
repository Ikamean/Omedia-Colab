const { client } = require('../Redis/redisConfig');
const { updateCache } = require('../controllers/commons/updateCache');

    /**
     * 
     * @param {obj} req 
     * @param {obj} res 
     * @param {} next 
     * 
     * Redis Caching Middleware for api/media route
     * 
     * checks if data is allready cached, if not : asks MongoDB to get the latest updated data and caches it.
     */

const redisMiddleware = ( req, res, next ) => {

    client.get('media', async ( err, data ) => {
        if(err) console.error(err);
        
        if( data === null ){
            const media = await updateCache('Updating cache from Redis middleware');

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

module.exports = { redisMiddleware }