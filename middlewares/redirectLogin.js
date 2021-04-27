const redirectLogin = ( req, res, next ) => {

    if(!req.session.userId){
        
       return res.status(401).json({
           "error": "Not Authorized Request"
       })
    }

    next();
    
}

module.exports = redirectLogin ;