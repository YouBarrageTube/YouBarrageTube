<template>
    <div class='row-list'>
        <div class="gallery" v-for="video in videos" :key="video.id">
            <router-link :to="`/videos/`+video.id">
                <a :href='video.id'>
                    <img :src="video.thumbnail" alt="video image">
                </a>
                <div class="desc">{{video.title}}</div>
            </router-link>
        </div>
    
    
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'VideoList',
        data: function() {
            return {
                videos: []
            };
        },
        props: [
            'query',
            'searchResult'
        ],
        watch: {
            searchResult: function() {
                // console.log('search result change in videolist');
                // console.log(this.searchResult);
                // console.log('video in watch function');
                // console.log(this.videos);
                this.videos = this.searchResult;
            },
            '$route.query.keyword': function(){
                this.query = this.$route.query.keyword;
                axios.get(`/v1/video/search?keyword=${this.query}&resultNum=10`)
                    .then(response => this.videos = response.data)
                    .catch(error => console.log(error));
            }
        },
        mounted: function() {
            // console.log('searchResult');
            // console.log(this.searchResult);
            // console.log('query in video list');
            // console.log(this.query);
            // if (this.searchResult === undefined || this.searchResult.length == 0){
    
            if (this.query === undefined || this.query.length == 0) {
                axios.get('/v1/video/popular?resultNum=21')
                    .then(response => this.videos = response.data)
                    .catch(error => console.log(error));
            } else {
                console.log('set to search result');
                axios.get(`/v1/video/search?keyword=${this.query}&resultNum=10`)
                    .then(response => this.videos = response.data)
                    .catch(error => console.log(error));
                // this.videos = this.searchResult;
            }
    
        }
    }
</script>


<style scoped>
    div.row-list {
        margin-left: 12%;
        margin-right: 12%;
    }
    
    div.gallery {
        border: 1px solid #ccc;
        float: left;
        width: 25%;
        margin-right: 12.2%;
        margin-bottom: 3%;
        margin-top: 3%;
    }
    
    div.gallery:nth-child(3n+3) {
        margin-right: 0%;
    }
    
    div.gallery:hover {
        border: 1px solid #777;
    }
    
    div.gallery img {
        width: 100%;
        height: auto;
    }
    
    div.desc {
        padding: 5%;
        text-align: center;
        height: 40px;
    }
</style>