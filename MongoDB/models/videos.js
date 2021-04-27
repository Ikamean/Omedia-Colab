const mongoose = require('../connect');


const videoSchema = new mongoose.Schema({
    author: String,
    url: String,
    title: String,
    private: Boolean,
    created: String
})

videoSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
});



module.exports = mongoose.model('Videos', videoSchema)