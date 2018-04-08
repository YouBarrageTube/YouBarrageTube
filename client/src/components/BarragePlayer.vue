<template>
  <div >
      <div v-on:click="play">
        <player :isPlaying="isPlaying" :videoId = "videoId" @onTimeUpdate="currentTime = $event"/>
        <barrage :isPlaying="isPlaying"  :videoId = "videoId" :submitedInput="submitedInput" :currentTime="currentTime"/>
      </div>
      <p>{{currentTime}}s<p/>
      <textarea v-model="currentInput" placeholder="add your comment"></textarea>
      <button @click = "addComment">Submit</button>
  </div>
</template>

<script>
import Barrage from './Barrage';
import Player from './Player';

export default {
  name: 'BarragePlayer',
  data: function(){
      return {
          videoId:'A0D1h30kXlI',
          isPlaying:false,
          currentTime:0,
          currentInput:'',
          submitedInput:'',
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
      }
  }
}
</script>


<style scoped>

</style>
