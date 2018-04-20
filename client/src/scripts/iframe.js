// var iframe = function(el, id, height, width, parent) {
//   this.el = el;
//   this.id = id;
//   var loadYT = new Promise(resolve => {
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//   });
//   parent.onPlayerStateChange = function(vueComponent, e) {
//     console.log(e.data);
//     if (e.data == YT.PlayerState.BUFFERING) {
//       vueComponent.$emit(
//         "onTimeUpdate",
//         Math.floor(vueComponent.player.player.getCurrentTime())
//       );
//       vueComponent.$emit("onReloadComments");
//     }
//     if (e.data === YT.PlayerState.PLAYING || e.data === YT.PlayerState.PAUSED) {
//       vueComponent.$emit("onPlayerStateChange", e.data);
//     }
//   };
//   parent.onPlayerStateChange = parent.onPlayerStateChange.bind(null, parent);
//   loadYT.then(YT => {
//     this.player = new YT.Player(this.el, {
//       // height: height,
//       // width: width,
//       videoId: this.id,
//       playerVars: {
//         controls: 1,
//         disablekb: 0,
//         fs: 0,
//         showinfo: 0,
//         rel: 0
//       },
//       events: {
//         onStateChange: parent.onPlayerStateChange
//       }
//     });
//   });
// };

// export default iframe;

import './youtube1';
import './youtube2';

var iframe = function(el, id, height, width, parent) {
  this.el = el;
  this.id = id;
  
  parent.onPlayerStateChange = function(vueComponent, e) {
    console.log(e.data);
    if (e.data == YT.PlayerState.BUFFERING) {
      vueComponent.$emit(
        "onTimeUpdate",
        Math.floor(vueComponent.player.player.getCurrentTime())
      );
      vueComponent.$emit("onReloadComments");
    }
    if (e.data === YT.PlayerState.PLAYING || e.data === YT.PlayerState.PAUSED) {
      vueComponent.$emit("onPlayerStateChange", e.data);
    }
  };
  parent.onPlayerStateChange = parent.onPlayerStateChange.bind(null, parent);
  this.player = new YT.Player(this.el, {
    videoId: this.id,
    // height: height,
    // width: width,
    playerVars: {
      controls: 1,
      disablekb: 0,
      fs: 0,
      showinfo: 0,
      rel: 0,
      playsinline: 1
    },
    events: {
      onStateChange: parent.onPlayerStateChange
    }
  });
};

export default iframe;
