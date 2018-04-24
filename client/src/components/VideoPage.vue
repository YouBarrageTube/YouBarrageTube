<template>
    <div>
        <navigation-menu/>
        <!--go to barrageplayer container later to format-->
        <p>{{title}}</p>
        <player-container :videoId="$route.params.id"></player-container>
        <related-video-list></related-video-list>
    </div>
</template>

<script>
    import PlayerContainer from './PlayerContainer'
    import NavigationMenu from './NavigationMenu'
    import RelatedVideoList from './RelatedVideoList'
    import axios from 'axios'

    export default {
        name: 'VideoPage',
        data: function() {
            return {
                videoId: "",
                title: ""
            }
        },
        components: {
            'navigation-menu': NavigationMenu,
            'player-container': PlayerContainer,
            'related-video-list': RelatedVideoList
        },
        mounted: function() {
            axios.get(`/v1/video/getById?id=${this.$route.params.id}`)
                .then(response => this.title = response.data.title)
                .catch(error => console.log(error));
        }
    }
</script>


<style scoped>
    
</style>
