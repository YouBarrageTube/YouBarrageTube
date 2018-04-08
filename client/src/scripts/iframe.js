var iframe = function(el, id) {
    this.el = el;
    this.id = id;
    var loadYT = new Promise(resolve => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });
    loadYT.then(YT => {
          this.player = new YT.Player(this.el, {
              height: 315,
              width: 650,
              videoId: this.id,
              playerVars: {
                controls: 0,
                disablekb: 0,
                fs: 0,
                showinfo: 0,
                rel: 0
              }
            });
    });
  };
  
  export default iframe;