const {google} = require('googleapis');
const service = google.youtube('v3');
const key = 'AIzaSyAVT1EUePVywkA_MA9Lv_MIzmUxavl5jn8';
exports.getPopular = function (resultNum, fn) {
    const params = {
        'maxResults': resultNum,
        'part': 'snippet',
        'chart': 'mostPopular',
        'regionCode': 'US',
        'key': key
    };
    service.videos.list(params, function (err, response) {
        if (err) {
            fn('The API returned an error: ' + err);
            return;
        }
        var items = response.data.items;
        var res = [];
        items.forEach(function (item) {
            res.push({
                'id': item.id,
                'title': item.snippet.title,
                'thumbnail': item.snippet.thumbnails.high.url
            });
        });
        fn(res);
    });
};

exports.seachByKeyword = function (keyword, resultNum, fn) {
    const params = {
        'maxResults': resultNum,
        'part': 'snippet',
        'q': keyword,
        'type': 'video',
        'key': key
    };
    service.search.list(params, function (err, response) {
        if (err) {
            fn('The API returned an error: ' + err);
            return;
        }
        var items = response.data.items;
        var res = [];
        items.forEach(function (item) {
            if (item.id.kind != 'youtube#video')
                return;
            res.push({
                'id': item.id.videoId,
                'title': item.snippet.title,
                'thumbnail': item.snippet.thumbnails.high.url
            });
        });
        fn(res);
    });
};

exports.searchById = function (id, fn) {
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
        var items = response.data.items;
        var res = {};
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

exports.getRelatedVideoById = function (id, resultNum, fn) {
    const params = {
        'maxResults': resultNum,
        'part': 'snippet',
        'relatedToVideoId': id,
        'type': 'video',
        'key': key
    };
    service.search.list(params, function (err, response) {
        if (err) {
            fn('The API returned an error: ' + err);
            return;
        }
        var items = response.data.items;
        var res = [];
        items.forEach(function (item) {
            res.push({
                'id': item.id.videoId,
                'title': item.snippet.title,
                'thumbnail': item.snippet.thumbnails.high.url
            });

        });
        fn(res);
    });
};
