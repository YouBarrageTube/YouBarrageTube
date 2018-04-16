const chai = require('chai')
    , chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

var baseUrl = 'http://localhost:3000/v1/video';
var testVideoId = 'hwjdXBxeWsc';

describe('Video APIs', function () {

    /**
     * /popular
     */

    /*
    Get a 200 and 10 results if without resultNum
    */
    it('should return 200 status code and 10 video results if without resultNum', function (done) {
        chai.request(baseUrl)
            .get('/popular')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.equal(10);
                done();
            });
    });
    /*
    Get a 200 and 20 results if resultNum is 20
    */
    it('should return 200 status code and 20 video results if resultNum is 20', function (done) {
        chai.request(baseUrl)
            .get('/popular')
            .query({resultNum: 20})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.equal(20);
                done();
            });
    });

    /*
    Get a 400 if resultNum is smaller than 1
    */
    it('should return 400 status code if resultNum is smaller than 1(popular)', function (done) {
        chai.request(baseUrl)
            .get('/popular')
            .query({resultNum: 0})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /*
    Get a 400 if resultNum is larger than 50
    */
    it('should return 400 status code if resultNum is larger than 50(popular)', function (done) {
        chai.request(baseUrl)
            .get('/popular')
            .query({resultNum: 51})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /**
     * /search
     */

    /*
    Get a 200 and 10 results if with keyword and without resultNum
    */
    it('should return 200 status code and 10 video results if with keyword and without resultNum', function (done) {
        chai.request(baseUrl)
            .get('/search')
            .query({keyword: 'BMW'})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.equal(10);
                done();
            });
    });
    /*
    Get a 200 and 20 results if with keyword and resultNum is 20
    */
    it('should return 200 status code and 20 video results if with keyword and resultNum is 20', function (done) {
        chai.request(baseUrl)
            .get('/search')
            .query({keyword: 'BMW', resultNum: 20})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.equal(20);
                done();
            });
    });

    /*
    Get a 400 if without keyword
    */
    it('should return 400 status code if without keyword', function (done) {
        chai.request(baseUrl)
            .get('/search')
            .query({resultNum: 20})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /*
    Get a 400 if resultNum is smaller than 1
    */
    it('should return 400 status code if resultNum is smaller than 1(search)', function (done) {
        chai.request(baseUrl)
            .get('/search')
            .query({keyword: 'BMW', resultNum: 0})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /*
    Get a 400 if resultNum is larger than 50
    */
    it('should return 400 status code if resultNum is larger than 50(search)', function (done) {
        chai.request(baseUrl)
            .get('/search')
            .query({keyword: 'BMW', resultNum: 51})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /**
     * /relatedVideo
     */

    /*
    Get a 200 and 10 results if with videoId and without resultNum
    */
    it('should return 200 status code and 10 video results if with videoId and without resultNum', function (done) {
        chai.request(baseUrl)
            .get('/relatedVideo')
            .query({videoId: testVideoId})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.equal(10);
                done();
            });
    });
    /*
    Get a 200 and 20 results if with videoId and resultNum is 20
    */
    it('should return 200 status code and 20 video results if with videoId and resultNum is 20', function (done) {
        chai.request(baseUrl)
            .get('/relatedVideo')
            .query({videoId: testVideoId, resultNum: 20})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.equal(20);
                done();
            });
    });

    /*
    Get a 400 if without keyword
    */
    it('should return 400 status code if without videoId', function (done) {
        chai.request(baseUrl)
            .get('/relatedVideo')
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /*
    Get a 400 if resultNum is smaller than 1
    */
    it('should return 400 status code if resultNum is smaller than 1(related video)', function (done) {
        chai.request(baseUrl)
            .get('/relatedVideo')
            .query({videoId: testVideoId, resultNum: 0})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /*
    Get a 400 if resultNum is larger than 50
    */
    it('should return 400 status code if resultNum is larger than 50(related video)', function (done) {
        chai.request(baseUrl)
            .get('/relatedVideo')
            .query({videoId: testVideoId, resultNum: 51})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    /**
     * /top10Comments
     */
    /*
    Get a 200 and no more than 10 results
    */
    it('should return 200 status code and get no more than 10 results', function (done) {
        chai.request(baseUrl)
            .get('/top10Comments')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.length).to.be.at.most(10);
                done();
            });
    });
});