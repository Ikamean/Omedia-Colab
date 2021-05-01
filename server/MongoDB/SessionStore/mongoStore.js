const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri: process.env.MONGO_STORE_URI,
    collection: process.env.MONGO_SES_COLLECTION
})

store.on('error', function(error) {
    console.log(error);
  });

module.exports = store;