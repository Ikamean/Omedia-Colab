const mongoose = require('../connect');


const mediaSchema = new mongoose.Schema({
    author: String,
    url: String,
    title: String,
    private: Boolean,
    created: String
})

mediaSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
});



module.exports = mongoose.model('Media', mediaSchema)