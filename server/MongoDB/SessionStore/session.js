const session = require('express-session')
const store = require('./mongoStore');

const sess = session({
    name: 'sid',
    resave: false,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    store: store,
    cookie :{
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production' ? true : false,
        httpOnly: true
    }
});

module.exports = sess;