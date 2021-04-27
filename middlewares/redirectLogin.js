const redirectLogin = ( req, res, next ) => {

    if(!req.session.userId){
        // res.redirect(Login page)
       return res.status(401).json({
           "error": "Not Authorized Request"
       })
    }

    next();
    
}

module.exports = redirectLogin ;