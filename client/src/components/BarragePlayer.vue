<template>
  <div v-on:click="play">
      <player :isPlaying="isPlaying"  @onTimeUpdate="currentTime = $event"/>
      <barrage :isPlaying="isPlaying" :currentTime="currentTime"/>
      <p>{{currentTime}}s<p/>
  </div>
</template>

<script>
import Barrage from './Barrage';
import Player from './Player';

export default {
  name: 'BarragePlayer',
  data: function(){
      return {
          isPlaying:false,
          currentTime:0
      };
  },
  components:{
      'barrage': Barrage,
      'player': Player
  },
  methods: {
      play: function(e){
          e.preventDefault()
          this.isPlaying = !this.isPlaying;
          console.log(this.isPlaying);
      }
  }
}
</script>


<style scoped>

</style>
