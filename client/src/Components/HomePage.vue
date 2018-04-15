<template>
    <div>
        <navigation-menu/>
        <h1 align="center">Share Your Comment!</h1>
        <!--go to barrageplayer container later to format-->
        <video-list></video-list>
    </div>
</template>

<script>
    import BarragePlayer from './BarragePlayer'
    import NavigationMenu from './NavigationMenu'
    import VideoList from './VideoList'
    
    export default {
        name: 'HomePage',
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
