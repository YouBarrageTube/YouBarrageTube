const chai = require('chai')
    , chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

var baseUrl = 'http://localhost:3000/v1';
var testVideoId = '123';
describe('Comment APIs', function () {
    /*
    Get a 200 if with videoId
     */
    it('should return 200 status code if with VideoID', function () {
        chai.request(baseUrl)
            .get('/comments')
            .query({videoId: testVideoId})
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
    });

    /*
    Get a 400 if without videoId
    */
    it('should return 400 status code if without VideoId', function () {
        chai.request(baseUrl)
            .get('/comments')
            .end(function (err, res) {
                expect(res).to.have.status(400);
            });
    });
    /*
    Get a 200 if with complete parameters
     */
    it('should return 200 status code if with complete parameters', function () {
        chai.request(baseUrl)
            .post('/comment')
            .type('form')
            .send({videoId: testVideoId, comment:'123', videoTime: 0})
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
    });

    /*
     Get a 400 if without complete parameters
      */
    it('should return 400 status code if videoId missing', function () {
        chai.request(baseUrl)
            .post('/comment')
            .type('form')
            .send({comment:'123', videoTime: 0})
            .end(function (err, res) {
                expect(res).to.have.status(400);
            });
    });

    /*
    Get a 400 if without complete parameters
    */
    it('should return 400 status code if comment missing', function () {
        chai.request(baseUrl)
            .post('/comment')
            .type('form')
            .send({videoId: testVideoId, videoTime: 0})
            .end(function (err, res) {
                expect(res).to.have.status(400);
            });
    });

    /*
     Get a 400 if without complete parameters
    */
    it('should return 400 status code if videoTime missing', function () {
        chai.request(baseUrl)
            .post('/comment')
            .type('form')
            .send({videoId: testVideoId, comment:'123'})
            .end(function (err, res) {
                expect(res).to.have.status(400);
            });
    });




});