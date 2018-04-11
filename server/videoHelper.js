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
            res.push({'id': item.id, 'title': item.snippet.title, 'thumbnail': item.snippet.thumbnails.standard.url});
        });
        fn(res);
    });
};