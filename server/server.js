require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const session = require('./MongoDB/SessionStore/session');
const morgan = require('morgan');
const config = require('config');


const express = require('express');
const app = express();

// Router \\
const Register = require('./routes/register');
const Login = require('./routes/login');
const Logout = require('./routes/logout');
const User = require('./routes/user');
const Media = require('./routes/media');
const Upload = require('./routes/upload');


// Middlewares \\
const redirectLogin = require('./middlewares/redirectLogin');
const redirectHome = require('./middlewares/redirectHome');


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://omedia-colab.herokuapp.com/' : 'http://localhost:5000/',
    optionsSuccessStatus: 200,
    credentials: true
}));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './controllers/commons/tmpFolder'
}));

// Session \\
app.use(session);

// Routes \\
app.use('/api/register', redirectHome, Register );
app.use('/api/login', redirectHome, Login );
app.use('/api/logout', redirectLogin, Logout );
app.use('/api/user', redirectLogin, User );
app.use('/api/media', Media );
app.use('/api/upload', redirectLogin, Upload ); 


if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}


app.use(express.static(`${__dirname}/dist`) );
app.get('*',  (req,res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/ping', (req,res) => {
    res.send(`<h1>Pong is running on port ${PORT}</h1>`);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));