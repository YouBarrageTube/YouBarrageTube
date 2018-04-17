<template>
    <div>
        <navigation-menu/>
        <!--go to barrageplayer container later to format-->
        <player-container :videoId='this.$route.params.id'></player-container>
        
        <related-video-list></related-video-list>
    </div>
</template>

<script>
    import PlayerContainer from './PlayerContainer'
    import NavigationMenu from './NavigationMenu'
    import RelatedVideoList from './RelatedVideoList'
    
    export default {
        name: 'VideoPage',
        components: {
            'navigation-menu': NavigationMenu,
            'player-container': PlayerContainer,
            'related-video-list': RelatedVideoList
        }
    }
</script>


<style scoped>

</style>
