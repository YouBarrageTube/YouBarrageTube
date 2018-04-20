<template>
    <div>
        <navigation-menu/>
        <h1 align="center">Your Search Result:</h1>
        <!--go to barrageplayer container later to format-->
        <div>
            <video-list :searchResult="videos" :query='query'></video-list>
        </div>
    </div>
</template>

<script>
    import BarragePlayer from './BarragePlayer'
    import NavigationMenu from './NavigationMenu'
    import VideoList from './VideoList'
    import axios from 'axios'

    export default {
        name: 'SearchPage',
        data: function() {
            return {
                videos: [],
                query: this.$route.query.keyword
            };
        },
        components: {
            'navigation-menu': NavigationMenu,
            'barrage-player': BarragePlayer,
            'video-list': VideoList
        },
        watch: {
            // videos: function(){
            //     console.log('videos changed');
            // },
            '$route.query.keyword': function(){
                this.query = this.$route.query.keyword;
                axios.get(`/v1/video/search?keyword=${this.query}&resultNum=21`)
                .then(response => this.videos = response.data)
                .catch(error => console.log(error));
            }
        },
        mounted: function() {
            this.query = this.$route.query.keyword;
            axios.get(`/v1/video/search?keyword=${this.query}&resultNum=21`)
                .then(response => this.videos = response.data)
                .catch(error => console.log(error));
        }
    }
</script>


<style scoped>

</style>
