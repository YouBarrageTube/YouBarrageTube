var githubhook = require('githubhook');
// configure listener for github changes
var github = githubhook({/* options */
  port: 7777,
  path: "/postreceive",
  secret: "youbarragetube"
});

// listen to push on github on branch master
github.on('push', function (repo, ref, data) {
  console.log('receive a push event');
});

// listen to github push
github.listen();