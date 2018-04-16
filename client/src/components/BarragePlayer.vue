<template>
  <div style="height:100%">
      <div v-on:click="play" class="player-container">
        <player :isPlaying="isPlaying" 
        :videoId = "videoId" 
        :playerWidth = "playerWidth"
        :playerHeight = "playerHeight"
        @onTimeUpdate="currentTime = $event"/>
        <barrage :isPlaying="isPlaying"  
        :playerWidth = "playerWidth"
        :playerHeight = "playerHeight"
        :currentComments = "currentComments"/>
      </div>
      <p>{{currentTime}}s<p/>
      <textarea v-model="currentInput" placeholder="add your comment"></textarea>
      <button @click = "addComment">Submit</button>
  </div>
</template>

<script>
import Barrage from './Barrage';
import Player from './Player';
import axios from 'axios';

export default {
  name: 'BarragePlayer',
  data: function(){
      return {
          videoId:'A0D1h30kXlI',
          isPlaying:false,
          currentTime:0,
          currentInput:'',
          submitedInput:'',
          playerWidth: window.innerWidth * 0.7,
          playerHeight: window.innerWidth * 0.7 / 16 * 9,
          comments: [],
          currentComments: [],
          currentIndex: 0,
      };
  },
  components:{
      'barrage': Barrage,
      'player': Player
  },
  methods: {
      play: function(e){
          e.preventDefault();
          this.isPlaying = !this.isPlaying;
      },

      addComment: function(e){
        e.preventDefault();
        this.submitedInput = this.currentInput;
        this.currentInput = "";
        var newComment = {
            videoId:this.videoId,
            comment: this.submitedInput,
            videoTime: this.currentTime,
        }
        console.log(newComment);
        axios.post('/v1/comment',{
            videoId:this.videoId,
            comment: this.submitedInput,
            videoTime: this.currentTime
        }).then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        });
        newComment.height = Math.floor(Math.random() * 20) * 5;
        this.currentComments.push(newComment);
      },

      updateCurrentComments: function(currentTime){
          //var currentTime = this.currentTime;
          var allComments = this.comments;
          var i = this.currentIndex;
          var currentComments = this.currentComments;

          while(i<allComments.length && allComments[i].videoTime <= currentTime){
              currentComments.push(allComments[i]);
              allComments[i].height = Math.floor(Math.random() * 20) * 5;
              i++;
          };
          while(currentComments[0] && currentTime - currentComments[0].videoTime >= 10 ){
              currentComments.shift();
          }

           this.currentIndex = i;

           console.log(this.currentComments);
      },

  },
  mounted(){
      // Load video comments by video ID
      var that = this;
      axios.get('/v1/comments',{
          params:{
              videoId: this.videoId
          }
      }).then(function(response){
          console.log(response.data);
          that.comments = response.data;
          that.updateCurrentComments.call(that,that.currentTime);
      });
  },
    watch: {
          currentTime: function(newVal, oldVal){
              this.updateCurrentComments.call(this, newVal);
          }
    }
}
</script>


<style scoped>
.player-container{
    position: relative;
    height: 95%
}
</style>
