require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

const Register = require('./routes/register');
const Login = require('./routes/login');


// Middlewares \\
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Routes \\
app.use('/api/register', Register);

app.use(express.static(`${__dirname}/views`) );
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));