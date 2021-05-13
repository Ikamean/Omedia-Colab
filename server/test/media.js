require('dotenv').config();

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Media = require('../MongoDB/models/media');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Media', () => {
    beforeEach((done) => { //Before each test we empty the database
        Media.deleteMany({}, (err) => {
           done();
        });
    });
/*
  * Test the /api/media route
  */
  describe('GET /api/media', () => {
      it('/api/media = >>> it should GET all the Media', (done) => {
        chai.request(server)
            .get('/api/media')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.data.length.should.be.eql(0);
              done();
            });
      });

    //TODO // send authenticated POST request to api/upload

    

    
  });

   // 401 unauthorized requests

  describe('POST /api/upload', () => {

    it('/api/upload =>> it should not POST a Media without unauthorized session id', (done) => {
      let media = {
          title: "The Lord of the Rings",
          mediaFile: "video.mp4",
          private: false
      }
        chai.request(server)
        .post('/api/upload')
        .send(media)
        .end((err, res) => {
              res.should.have.status(401);
             
          done();
        });
    });
  });

 

   // 401 unauthorized requests
  
  describe('DELETE /api/media/delete/:id', () => {

    it('/api/media/delete/:id =>> it should response with 401 if no media found by requested ID', (done) => {
        let mediaId = "401";

        chai.request(server)
        .delete('/api/media/delete/' + mediaId)
        .end((err, res) => {

          

          res.should.have.status(401);

          

          done();
        });
    })
  })

  // 401 unauthorized requests

  describe('PUT /api/media/edit/:id', () => {

    it('/api/media/edit/:id =>> it should response with 401, unauthorized Request', (done) => {
      let mediaId = "401";

      const updatedMedia = {
        title: "newTitle"
      }

      chai.request(server)
      .put('/api/media/edit/' + mediaId)
      .send(updatedMedia)
      .end(( err, res )=> {
        res.should.have.status(401)

        done();
      })

    })
  })


});