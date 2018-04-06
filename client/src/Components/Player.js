import React, { Component } from "react";
import "./Player.css";

let loadYT;

class Player extends Component {
  constructor(props) {
    super(props);
    this.isPlaying = false;
    this.play = this.play.bind(this);
  }
  componentDidMount() {
    if (!loadYT) {
      loadYT = new Promise(resolve => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    };
    loadYT.then(YT => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: 315,
        width: 650,
        videoId: "A0D1h30kXlI",
        playerVars: {
          controls: 0,
          disablekb: 0,
          fs: 0,
          showinfo: 0,
          rel: 0
        }
      });
    });
  }
  play() {
    if (this.isPlaying === false) {
      this.player.playVideo();
      this.isPlaying = true;
    } else {
      this.player.pauseVideo();
      this.isPlaying = false;
    }
    this.props.handleButtonClick();
  }
  render() {
    return (
      <div>
        <section onClick={this.play} className="youtubeComponent-wrapper">
          <p>666</p>
          <div
            ref={r => {
              this.youtubePlayerAnchor = r;
            }}
          />
        </section>
        <br />
        <button onClick={this.play}>Play</button>
      </div>
    );
  }
}

export default Player;
