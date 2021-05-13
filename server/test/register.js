require('dotenv').config();


process.env.NODE_ENV = 'test';


let Users = require('../MongoDB/models/users');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');



chai.use(chaiHttp);

const newUser = {
    userName : "ikamean",
    email : "ikamean@gmail.com",
    password : "a12345678"
}

const wrongPasswordUser = {
    userName : "ikamean",
    email : "ikamean@gmail.com",
    password : "12345678"
}

describe('Register API', () => {

   

    it('Register 201 status code', async () => {
        try {
            
            await Users.deleteMany({});

            const regResp = await chai.request(server)
                            .post('/api/register')
                            .send(newUser)


            console.log('Register Response status =>>>>', regResp.status);

            regResp.should.have.status(201);

        } catch (error) {

            console.log(error);
            
        }
        
    });

    it('Register 409 Conflict, send same credentials for user registration', async () => {
        try {
            

            const regResp = await chai.request(server)
                            .post('/api/register')
                            .send(newUser)


            console.log('Register Response status =>>>>', regResp.status);

            regResp.should.have.status(409);

        } catch (error) {

            console.log(error);
            
        }
    });

    it('Register 409 for bad credentials', async () => {

        try {
            
            const regResp = await chai.request(server)
                                .post('/api/register')
                                .send(wrongPasswordUser)

            console.log('Register Response status  = >>>', regResp.status);

            regResp.should.have.status(409);
        } catch (error) {
            
        }
    });



})