<template>
    <div>
        <navigation-menu/>
        <h1 align="center">Share Your Comment!</h1>
        <!--go to barrageplayer container later to format-->
        <div>
            <video-list></video-list>
        </div>
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

</style>
