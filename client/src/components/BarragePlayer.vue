<template>
    <div style="width:100%; height:100%; position:relative">
        <div class="player-container">
            <player :isPlaying="isPlaying" :videoId="videoId" :playerWidth="playerWidth" :playerHeight="playerHeight" @onTimeUpdate="currentTime = $event" @onPlayerStateChange="play" @onReloadComments="reload" />
            <p class="comment" v-for="comment in currentComments" :class="{pause: !isPlaying}" :key="comment.id" :style="{top: comment.height + '%'}">{{comment.comment}}</p>
            <!-- <barrage :isPlaying="isPlaying"  
            :playerWidth = "playerWidth"
            :playerHeight = "playerHeight"
            :currentComments = "currentComments"/> -->
        </div>
        <comments-area :comments="comments" @onNewComment="addComment" />
        <!-- <player-control/>
          <p>{{currentTime}}s<p/>
          <textarea v-model="currentInput" placeholder="add your comment"></textarea>
          <button @click = "addComment">Submit</button> -->
    </div>
</template>

<script>
import Barrage from "./Barrage";
import Player from "./Player";
import CommentsArea from "./CommentsArea";
import axios from "axios";

export default {
  name: "BarragePlayer",
  data: function() {
    return {
      isPlaying: false,
      currentTime: 0,
      currentInput: "",
      submitedInput: "",
      playerWidth: window.innerWidth * 0.7,
      playerHeight: window.innerWidth * 0.7 / 16 * 9,
      comments: [],
      currentComments: [],
      currentIndex: 0
    };
  },
  props: ["videoId"],
  components: {
    barrage: Barrage,
    player: Player,
    "comments-area": CommentsArea
  },
  methods: {
    play: function(e) {
      if (e === 1) this.isPlaying = true;
      if (e === 2) this.isPlaying = false;
    },

    addComment: function(e) {
      console.log(e);
      this.submitedInput = e;
      var newComment = {
        videoId: this.videoId,
        comment: this.submitedInput,
        videoTime: this.currentTime
      };
      console.log(newComment);
      axios
        .post("/v1/comment", {
          videoId: this.videoId,
          comment: this.submitedInput,
          videoTime: this.currentTime
        })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
      newComment.height = Math.floor(Math.random() * 19) * 5;
      this.currentComments.push(newComment);
    },

    updateCurrentComments: function(currentTime) {
      var allComments = this.comments;
      var i = this.currentIndex;
      var currentComments = this.currentComments;

      while (
        i < allComments.length &&
        allComments[i].videoTime <= currentTime
      ) {
        currentComments.push(allComments[i]);
        allComments[i].height = Math.floor(Math.random() * 16) * 5 + 5;
        i++;
      }
      //   while(currentComments[0] && (currentTime - currentComments[0].videoTime >= 15) ){
      //       console.log(currentTime);
      //       console.log(currentComments[0]);
      //       currentComments.shift();
      //   }

      this.currentIndex = i;

      console.log(this.currentComments);
    },

    reload: function() {
      this.currentComments = [];
      this.currentIndex = 0;
      while (
        this.currentIndex < this.comments.length &&
        this.comments[this.currentIndex].videoTime < this.currentTime
      ) {
        this.currentIndex++;
      }
      this.updateCurrentComments(this.currentTime);
    }
  },
  mounted() {
    // Load video comments by video ID
    var that = this;
    axios
      .get("/v1/comments", {
        params: {
          videoId: this.videoId
        }
      })
      .then(function(response) {
        console.log(response.data);
        that.comments = response.data;
        that.updateCurrentComments.call(that, that.currentTime);
      });
  },
  watch: {
    currentTime: function(newVal, oldVal) {
      this.updateCurrentComments.call(this, newVal);
    },
    videoId: function(newVal, oldVal) {
      this.currentComments = [];
      this.comments = [];
      this.currentIndex = 0;
      var that = this;
      axios
        .get("/v1/comments", {
          params: {
            videoId: newVal
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.comments = response.data;
          that.updateCurrentComments.call(that, that.currentTime);
        });
    }
  }
};
</script>


<style scoped>
.player-container {
  float:left;
  position: relative;
  /* display:inline-block; */
  height:100%;
  width: 70%;
  overflow: hidden;
}

.comment {
  pointer-events: none;
  font-size: 1.15em;
  z-index: 100;
  display: inline-block;
  position: absolute;
  color: white;
  left: 100%;
  width: 100%;
  animation: wordmove 10s linear;
}

@keyframes wordmove {
  from {
    left: 100%;
  }
  to {
    left: -100%;
  }
}

.pause {
  animation-play-state: paused;
}
</style>
