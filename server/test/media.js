require('dotenv').config();

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
//Our parent block
describe('Media', () => {
    beforeEach( async () => { //Before each test we empty the database
        await Media.deleteMany({});
        await Users.deleteMany({});
    });
/*
  * Test the /api/media route
  */
  describe('GET All Media From MongoDB', () => {
      it('/api/media = >>> it should GET all the Media', async () => {
        const res = await chai.request(server)
            .get('/api/media')
            
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
                  res.body.data.length.should.be.eql(0);
      });

  });

   // 401 unauthorized requests 
  
  describe(' 401 Unauthorized MEDIA requests ', () => {


      it('/api/upload =>> it should not POST a Media without unauthorized session id', async () => {
        let media = {
            title: "The Lord of the Rings",
            mediaFile: "video.mp4",
            private: false
        }
          const res = await chai.request(server)
          .post('/api/upload')
          .send(media)

          res.should.have.status(401);
          

      });


      it('/api/media/delete/:id =>> it should response with 401 if no media found by requested ID', async () => {
        let mediaId = "401";

        const res = await chai.request(server).delete('/api/media/delete/' + mediaId)

        res.should.have.status(401);
        
      })


    it('/api/media/edit/:id =>> it should response with 401, unauthorized Request', async () => {
      let mediaId = "401";

      const updatedMedia = {
        title: "newTitle"
      }

      const res = await chai.request(server)
      .put('/api/media/edit/' + mediaId)
      .send(updatedMedia)
      
      res.should.have.status(401)

    })

  });


  describe(' Make Authorized Requests for Media Manipulation ', () => {

    const newUser = {
      userName : 'ikamean',
      email : 'ikamean@gmail.com',
      password : "a12345678"
    }

    const user = {
      userName : 'ikamean',
      password : 'a12345678'
    }

    const media = {
      title : 'newMedia',
      mediaFile : 'media.mp4',
      private : false
    }

    let sid = ''

    before( async () => {
      
      const regResp = await chai.request(server)
      .post('/api/register')
      .send(newUser)

      console.log('Register Resp status', regResp.status);

      sid = 's%3A3g5W9ix2JS_KPEzIJXHJjB6B5ALcdUV7.3H%2B16O7vS%2BbgPufo354o8tw6oPAUcMVCti1s3WFWIFg'

      const loginResp = await chai.request(server)
                              .post('/api/login')
                              .send(user)
      console.log('Login Resp status', loginResp.status);
      
    });

    it('POST /api/upload', async ()=> {

      
      const res = await  chai.request(server)
      .post('/api/upload')
      .set('Cookie', `sid=${sid}`)
      .send(media)

      console.log('/api/upload response status', res.status);
     
    })

  })



});