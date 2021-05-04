const redis = require('redis');
  
/**
 *  Creating Redis client for cache handling
 */
try {
    const  client    = redis.createClient(process.env.REDIS_URL);

    client.on( 'error' , (err) => {
        return console.log(err);
    } );

    
    module.exports = { client };

} catch (error) {
    console.error(error);
    return null;
}


  //client.on('error', (err) => console.log(err));

 