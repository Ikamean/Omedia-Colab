require('dotenv').config();


process.env.NODE_ENV = 'test';


let Users = require('../MongoDB/models/users');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');



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

const wrongUserPassword = {
    userName : 'ikamean',
    password : 'a1234567'
}

const wrongUsername = {
    userName : 'WrongUsername',
    password : 'a12345678'
}

describe('Login / Logout flow', () => {

    try {

        beforeEach( async () => {
            await Users.deleteMany({});
            await chai.request(server)
                  .post('/api/register')
                  .send(newUser)
        })

        it('Login status must be 200 and user object must be returned from server', async () => {
            
            const res = await chai.request(server)
                        .post('/api/login')
                        .send(user);
            console.log('Login Status =>>>>', res.status);
            res.should.have.status(200);
            res.body.should.be.a('object');

        });

        //TODO  403 WRONG Credentials TEST 
        /*
        it('Wrong Password, 403 Status Code', async () => {

            const res = await chai.request(server)
                                .post('/api/login')
                                .send(wrongUserPassword);
            
                                
            console.log('Wrong Pass Status Code =>>>>', res.status);

            

            res.should.have.status(403);
        });

        it('Wrong Username, 403 Status Code', async () => {

            const res = await chai.request(server)
                                .post('/api/login')
                                .send(wrongUsername);
            console.log('Wrong Username Status Code =>>>>', res.status);

            res.should.have.status(403);
        });
        */
    } catch (error) {
        console.log(error);
    }

})