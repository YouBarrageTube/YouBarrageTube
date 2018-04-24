var apiVersion = '/v1';
var dbHelper = require('./dbHelper');
var videoHelper = require('./videoHelper');
module.exports = function (app) {

  /**
   Comment endpoints
   */
  app.get(apiVersion + '/comments', function (req, res) {
    if (req.query.videoId) {
      dbHelper.getComments(req.query.videoId, function (comments) {
        res.send(comments);
      });
    }
    else {
      res.status(400).send("Required parameter: videoId");
    }

  });

  app.post(apiVersion + '/comment', function (req, res) {
    if (req.body.videoId && req.body.comment && req.body.videoTime != null) {
      dbHelper.insertComment(req.body.videoId, req.body.comment, req.body.videoTime);
      res.send('Comment inserted');
    }
    else {
      res.status(400).send("Required parameter in body: videoId, comment, videoTime");
    }
  });

  /**
   Video endpoints
   */
  var videoApiPath = '/video';

  app.get(apiVersion + videoApiPath + '/popular', function (req, res) {
    if (req.query.resultNum != null) {
      if (req.query.resultNum > 50 || req.query.resultNum < 1) {
        res.status(400).send('ResultNum should be in range[1,50]')
      }
      else {
        videoHelper.getPopular(parseInt(req.query.resultNum), req.query.pageToken, function (response) {
          res.send(response);
        });
      }
    }
    else {
      //default fetch 10 results
      videoHelper.getPopular(10, req.query.pageToken, function (response) {
        res.send(response);
      });
    }
  });

  app.get(apiVersion + videoApiPath + '/getById', function (req, res) {
    if(!req.query.id){
      res.status(400).send('Required parameter: id');
    }
    else{
      videoHelper.getById(req.query.id, function (response) {
        res.send(response);
      })
    }
  });

  app.get(apiVersion + videoApiPath + '/search', function (req, res) {
    if (!req.query.keyword) {
      res.status(400).send('Required parameter: keyword');
    }
    else if (req.query.resultNum != null) {
      if (req.query.resultNum > 50 || req.query.resultNum < 1) {
        res.status(400).send('ResultNum should be in range[1,50]')
      }
      else {
        videoHelper.seachByKeyword(req.query.keyword, parseInt(req.query.resultNum), req.query.pageToken, function (response) {
          res.send(response);
        });
      }
    }
    else {
      //default fetch 10 results
      videoHelper.seachByKeyword(req.query.keyword, 10, req.query.pageToken, function (response) {
        res.send(response);
      });
    }
  });

  app.get(apiVersion + videoApiPath + '/relatedVideo', function (req, res) {
    if (!req.query.videoId) {
      res.status(400).send('Required parameter: videoId');
    }
    else if (req.query.resultNum != null) {
      if (req.query.resultNum > 50 || req.query.resultNum < 1) {
        res.status(400).send('ResultNum should be in range[1,50]')
      }
      else {
        videoHelper.getRelatedVideoById(req.query.videoId, req.query.resultNum, req.query.pageToken, function (response) {
          res.send(response);
        });
      }
    }
    else {
      //default fetch 10 results
      videoHelper.getRelatedVideoById(req.query.videoId, 10, req.query.pageToken, function (response) {
        res.send(response);
      });
    }
  });

  app.get(apiVersion + videoApiPath + '/top10Comments', function (req, res) {
    dbHelper.getTop10MostComments(function (response) {
      res.send(response);
    });
  });

};