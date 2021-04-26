require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const session = require('./MongoDB/SessionStore/session');

const express = require('express');
const app = express();

const Register = require('./routes/register');
const Login = require('./routes/login');


// Middlewares \\
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Session \\
app.use(session);

// Routes \\
app.use('/api/register', Register);
app.use('/api/login', Login);

app.get('/', (req,res) => {
    console.log(req.session);
    res.send('hi');
})

app.use(express.static(`${__dirname}/views`) );


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));