const chai = require('chai')
    , chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

var baseUrl = 'http://localhost:3000/v1';
var testVideoId = '123';
describe('Comment APIs', function () {
    /*
    Get 200 if with videoId
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
    Get 400 if without videoId
    */
    it('should return 400 status code if without VideoId', function () {
        chai.request(baseUrl)
            .get('/comments')
            .query({videoId: testVideoId})
            .end(function (err, res) {
                expect(res).to.have.status(400);
            });
    });


});