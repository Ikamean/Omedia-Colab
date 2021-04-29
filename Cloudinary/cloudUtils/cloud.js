const cloudinary = require('../cloudinaryConfig');

/*
    Helper Function for Media Uploading On cloudinary api
    returns response from cloudinary server 
*/

const cloudUploader = async  (media) => {
    try {
        
        
        return await cloudinary.uploader.upload( media, 
        {  resource_type: "video",  folder: "/Colab" });
        
        

    } catch (error) {
        console.log(error);
        return null;
    }
    
}

module.exports = { cloudUploader }