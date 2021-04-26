require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const session = require('express-session')

const express = require('express');
const app = express();

const ONE_HOUR = 1000 * 60 * 60;


const { 
    PORT = 5000,
    NODE_ENV = 'development',

    SESS_LIFETIME = ONE_HOUR,
    SESS_SECRET = "secret"
    
} = process.env;

const IN_PROD = NODE_ENV === 'production';

const Register = require('./routes/register');
const Login = require('./routes/login');


// Middlewares \\
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Session \\
app.use(session({
    name: 'sid',
    resave: false,
    secret: SESS_SECRET,
    saveUninitialized: false,
    cookie: { 
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}));

// Routes \\
app.use('/api/register', Register);
app.use('/api/login', Login);

app.use(express.static(`${__dirname}/views`) );


app.listen(PORT, console.log(`Server is running on Port ${PORT}`));