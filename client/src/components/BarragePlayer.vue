<template>
  <div v-on:click="play">
      <player/>
      <barrage/>
  </div>
</template>

<script>
import Barrage from './Barrage';
import Player from './Player';

export default {
  name: 'BarragePlayer',
  components:{
      'barrage': Barrage,
      'player': Player
  },
  methods: {
      play: function(e){
          e.preventDefault()
          console.log("got it");
      }
  }
}
</script>


<style scoped>

</style>
