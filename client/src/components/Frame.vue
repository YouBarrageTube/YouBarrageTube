<template>
  <div class = "frame">
    <barrage-player videoId = "A0D1h30kXlI"/>
  </div>
</template>

<script>
import BarragePlayer from './BarragePlayer'

export default {
    components:{
      'barrage-player': BarragePlayer
  },
}
</script>

<style scoped>
  .frame{
    box-sizing: border-box;
    border: 5px solid yellow;
    width: 100%;
    height: 600px;
  }
</style>
