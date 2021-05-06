const session = require('express-session')
const store = require('./mongoStore');

const ONE_HOUR = 1000 * 60 * 60;
const { 
    NODE_ENV = 'development',

    SESS_LIFETIME = ONE_HOUR,
    SESS_SECRET = "secret"
    
} = process.env;

const IN_PROD = NODE_ENV === 'production';

const sess = session({
    name: 'sid',
    resave: false,
    secret: SESS_SECRET,
    saveUninitialized: false,
    store: store,
    cookie: { 
        maxAge: SESS_LIFETIME,
        sameSite: 'strict',
        secure: true
    }
});

module.exports = sess;