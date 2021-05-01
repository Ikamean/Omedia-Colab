const bcrypt = require("bcrypt");

/* 
    Hashing passwords for new users during registration.
*/
const makeHash = async (password) => {
    return await bcrypt.hash(password,10);
}

/* 
    Comparing allready Saved hashes and  passwords During User Login.
*/
const compareHash = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}


module.exports = { makeHash, compareHash }