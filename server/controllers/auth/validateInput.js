const User = require('../../MongoDB/models/users');


/* 

        Password Validation fails if : 

        - Password starts with one or more number : ^\d+,
        - Password starts with one or more white space : ^\s+,
        - Password should be at least 8 characters long : \w{8,}

        P.S could be more complicated, but at this stage thats enough..

    */
const validatePassword = (pass) => {
    

    const regex1 = /^\d+|^\s+/g;
    const regex2 = /\w{8,}/g;

    const isValid =  !regex1.test(pass) && regex2.test(pass);

    

    return isValid;

}


/* 
    Replacing white space with '' 
*/
const parseUserName = (name) => {

    const whiteSpace = /\s+/g;

    return name.replace(whiteSpace,'');
}

/*
  Checking if inputed Email allready exists in database  
*/

const validateEmail = async (email) => {
    const allEmails =  await User.find({},{ email : 1, _id : 0 });
    
    const emailAllreadyExists = allEmails.some( e => e.email === email );

    return emailAllreadyExists;
}

module.exports = { validatePassword, parseUserName, validateEmail }