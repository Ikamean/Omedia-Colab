const cloudinary = require('../cloudinaryConfig');

/*
    Helper Function for Media Uploading On cloudinary api
*/

const cloudUploader = async  (media) => {
    try {
        
        
        let res = await cloudinary.uploader.upload_large( media, 
        {  resource_type: "video", chunk_size: 6000000, folder: "/Colab" });
        
        console.log(res);

    } catch (error) {
        console.log(error);
    }
    
}

module.exports = { cloudUploader }