const {google} = require('googleapis');
const service = google.youtube('v3');
const key = 'AIzaSyAVT1EUePVywkA_MA9Lv_MIzmUxavl5jn8';
exports.getPopular = function (resultNum, pageToken, fn) {
  const params = {
    'maxResults': resultNum,
    'part': 'snippet',
    'chart': 'mostPopular',
    'regionCode': 'US',
    'pageToken': pageToken,
    'key': key
  };
  service.videos.list(params, function (err, response) {
    if (err) {
      fn('The API returned an error: ' + err);
      return;
    }
    const items = response.data.items;
    let videos = [];
    items.forEach(function (item) {
      videos.push({
        'id': item.id,
        'title': item.snippet.title,
        'thumbnail': item.snippet.thumbnails.high.url
      });
    });
    let res = {};
    if (response.data.prevPageToken)
      res['prevPageToken'] = response.data.prevPageToken;
    else
      res['prevPageToken'] = '';
    if (response.data.nextPageToken)
      res['nextPageToken'] = response.data.nextPageToken;
    else
      res['nextPageToken'] = '';
    res['videos'] = videos;
    fn(res);
  });
};

exports.seachByKeyword = function (keyword, resultNum, pageToken, fn) {
  const params = {
    'maxResults': resultNum,
    'part': 'snippet',
    'q': keyword,
    'type': 'video',
    'pageToken': pageToken,
    'key': key
  };
  service.search.list(params, function (err, response) {
    if (err) {
      fn('The API returned an error: ' + err);
      return;
    }
    const items = response.data.items;
    let videos = [];
    items.forEach(function (item) {
      if (item.id.kind != 'youtube#video')
        return;
      videos.push({
        'id': item.id.videoId,
        'title': item.snippet.title,
        'thumbnail': item.snippet.thumbnails.high.url
      });
    });
    let res = {};
    if (response.data.prevPageToken)
      res['prevPageToken'] = response.data.prevPageToken;
    else
      res['prevPageToken'] = '';
    if (response.data.nextPageToken)
      res['nextPageToken'] = response.data.nextPageToken;
    else
      res['nextPageToken'] = '';
    res['videos'] = videos;
    fn(res);
  });
};

exports.getById = function (id, fn) {
  const params = {
    'part': 'snippet',
    'id': id,
    'key': key
  };
  service.videos.list(params, function (err, response) {
    if (err) {
      fn('The API returned an error: ' + err);
      return;
    }
    const items = response.data.items;
    let res = {};
    items.forEach(function (item) {
      res = {
        'id': id,
        'title': item.snippet.title,
        'thumbnail': item.snippet.thumbnails.high.url
      };
    });
    fn(res);
  });
};

exports.getRelatedVideoById = function (id, resultNum, pageToken, fn) {
  const params = {
    'maxResults': resultNum,
    'part': 'snippet',
    'relatedToVideoId': id,
    'type': 'video',
    'pageToken': pageToken,
    'key': key
  };
  service.search.list(params, function (err, response) {
    if (err) {
      fn('The API returned an error: ' + err);
      return;
    }
    const items = response.data.items;
    let videos = [];
    items.forEach(function (item) {
      videos.push({
        'id': item.id.videoId,
        'title': item.snippet.title,
        'thumbnail': item.snippet.thumbnails.high.url
      });

    });
    let res = {};
    if (response.data.prevPageToken)
      res['prevPageToken'] = response.data.prevPageToken;
    else
      res['prevPageToken'] = '';
    if (response.data.nextPageToken)
      res['nextPageToken'] = response.data.nextPageToken;
    else
      res['nextPageToken'] = '';
    res['videos'] = videos;
    fn(res);
  });
};
