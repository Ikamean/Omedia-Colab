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
        httpOnly: true,
        maxAge: 3600 * 24
    }
});

module.exports = sess;