const Users = require('../../MongoDB/models/users');

const getUser = async (userId) => {
    try {
        return await Users.findOne({ _id : userId });
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { getUser }