<template>
  <div >
        
        <navigation-menu/>
        <h1>test</h1>
        <!--go to barrageplayer container later to format-->        
        <div class='container'>
            <barrage-player/>
        </div>
        <h1>Oone more div</h1>
        <video-list></video-list>
  </div>
  
</template>

<script>
import BarragePlayer from './BarragePlayer'
import NavigationMenu from './NavigationMenu'
import VideoList from './VideoList'

export default {
  name: 'VideoPage',
  components: {
      'navigation-menu': NavigationMenu,
      'barrage-player': BarragePlayer,
      'video-list': VideoList
  }
}
</script>


<style scoped>
.container {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}
</style>
