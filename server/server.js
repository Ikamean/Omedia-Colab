require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const session = require('./MongoDB/SessionStore/session');

const express = require('express');
const app = express();


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
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './routes/tmpFolder/'
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


app.use(express.static(`${__dirname}/views`) );


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));