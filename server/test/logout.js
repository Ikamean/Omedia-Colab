require('dotenv').config();


process.env.NODE_ENV = 'test';


let Users = require('../MongoDB/models/users');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');



chai.use(chaiHttp);

describe('Logout', () => {

    const newUser = {
        userName : 'ikamean',
        email : 'ikamean@gmail.com',
        password : "a12345678"
      }
  
      const user = {
        userName : 'ikamean',
        password : 'a12345678'
      }

    let sid = ''

    before( async () => {
        await Users.deleteMany({});

        await chai.request(server)
                  .post('/api/register')
                  .send(newUser);

        const loginResp = await chai.request(server)
                .post('/api/login')
                .send(user);
        
        sid = JSON.stringify(loginResp.headers['set-cookie']).split('=')[1].split(' ')[0].split(';')[0];
        
    });

    it('with correct token response status should be 200', async () => {

            let res = await chai.request(server)
            .post('/api/logout')
            .set('Cookie', `sid=${sid}`);

            res.should.have.status(200);

    });

    it('Without SesS cookie response should be 401', async () => {

        let res = await chai.request(server)
                    .post('/api/logout')

        res.should.have.status(401)
    })
})