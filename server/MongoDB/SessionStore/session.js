const session = require('express-session')
const store = require('./mongoStore');



const sess = session({
    name: 'sid',
    resave: false,
    secret: 'secret',
    saveUninitialized: false,
    store: store
});

module.exports = sess;