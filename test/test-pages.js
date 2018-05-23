process.env.NODE_ENV = 'test';
process.env.DEBUG = null;


let chai = require('chai');
let expect = chai.expect;
let request = require('request');
let chaiHttp = require('chai-http');

let server = require('../bin/www');

chai.use(chaiHttp);

describe('Page Status', function () {
  describe('Homepage', function () {
    it('status', function (done) {
      chai.request(server).get('/').end(function (err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('Auth page', function () {
    it('status', function (done) {
      chai.request(server).get('/auth/login').end(function (err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('Content Editor page', function () {
    it('status', function (done) {
      chai.request(server).get('/content-editor').end(function (err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
    });
  });
});
