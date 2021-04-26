const Users = require('../MongoDB/models/users');
const { makeHash, compareHash } = require('./hashPassword');

/* 
    Checks if username exists allready or not.

*/
const findIfExists = async (name) => {

    try {

        return await Users.findOne({ userName : name }) ? true : false;

    } catch (error) {

        console.log(error);
        return null;

    }
    
}


/* 
        Handling new users data, saving them to the cloud.
*/
const addUser = async (name,pass) => {    

    try {

        const cloudUser = new Users({
            userName: name,
            password: await makeHash(pass),
            videos: []
        });


        return await cloudUser.save();

    } catch (error) {

        console.log(error);
        return null;

    }
    
}


/*
    Find user with username during login and check password
*/
const validateUser = async (name, pass) =>{
    try {
        let user = await Users.findOne({ userName : name });
        let passwordsMatch = await compareHash(pass, user.password);

        if(user && passwordsMatch){
            return true;
        }
        return false;

    } catch (error) {

        console.log(error);
        return null;

    }
}

module.exports = { findIfExists, addUser, validateUser }