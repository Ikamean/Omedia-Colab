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
  * Test the /GET route
  */
  describe('/GET Media', () => {
      it('it should GET all the Media', (done) => {
        chai.request(server)
            .get('/api/media')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.data.length.should.be.eql(0);
              done();
            });
      });
  });

});