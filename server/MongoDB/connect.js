const mongoose = require('mongoose');
let config = require('config'); //we load the db location from the JSON files

console.log(config);
const devUrl = config.get('dev.collection');
const testUrl = config.get('chai.collection');



let url = process.env.MONGODB_URI+testUrl

if( process.env.NODE_ENV !=='test' ){
    url = process.env.MONGODB_URI+devUrl
}

console.log(`Environment =>>>>>> ${process.env.NODE_ENV}`);

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
    console.log('connected to MongoDB')
    })
    .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
    })

module.exports = mongoose;