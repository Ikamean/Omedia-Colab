const redis = require('redis');
  
try {
    const  client    = redis.createClient({
        port      : process.env.REDIS_PORT,               // replace with your port
        host      : process.env.REDIS_HOST,        // replace with your hostanme or IP address
        password  : process.env.REDIS_PASS,    // replace with your password
      });

      module.exports = { client };

} catch (error) {
    console.error(error)
}


  //client.on('error', (err) => console.log(err));

 