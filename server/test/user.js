require('dotenv').config();
const fs = require('fs');

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Media = require('../MongoDB/models/media');
let Users = require('../MongoDB/models/users');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

const newUser = {
    userName : 'ikamean',
    email : 'ikamean@gmail.com',
    password : "a12345678"
  }

const user = {
    userName : 'ikamean',
    password : 'a12345678'
  }

describe('User API', () => {
    let sid = ''

    before( async () => {
        // Empty DB
        await Media.deleteMany({});
        await Users.deleteMany({});
      
      const regResp = await chai.request(server)
      .post('/api/register')
      .send(newUser)

      console.log('Register Resp status', regResp.status);

      

      const loginResp = await chai.request(server)
                              .post('/api/login')
                              .send(user)
      console.log('Login Resp status', loginResp.status);

      sid = JSON.stringify(loginResp.headers['set-cookie']).split('=')[1].split(' ')[0].split(';')[0];

      console.log();
      
    });


    it('/api/user/me', async () => {

        const res = await  chai.request(server)
                            .get('/api/user/me')
                            .set('Cookie', `sid=${sid}`)

        console.log('GET LOGGED USER response status = >>>', res.status);
        res.body.should.be.a('object');
        res.should.have.status(200);
                    
    })




})