const redirectHome = ( req, res, next ) => {

    if(req.session.userId){
        //res.redirect(home page)
       return res.status(401).json({
           "error": "Allready logged in, redirecting to home page"
       })
    }

    next();
    
}

module.exports = redirectHome ;