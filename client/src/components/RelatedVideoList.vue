<template>
    <div class='row-list'>
        <div class="gallery" v-for="video in videos" :key="video.id">
            <router-link :to="`/videos/`+video.id">
                <img :src="video.thumbnail" alt="video image">
                <div class="desc">{{video.title}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'RelatedVideoList',
        data: function() {
            return {
                videos: [],
                id: this.$route.params.id
            };
        },
        props: [
            'videoID'
        ],
        watch: {
            '$route.params.id': function(newID) {
                this.id = this.$route.params.id;
                axios.get(`/v1/video/relatedVideo?videoId=${this.id}&resultNum=21`)
                    .then(response => this.videos = response.data)
                    .catch(error => console.log(error));
    
            }
        },
        mounted: function() {
            axios.get(`/v1/video/relatedVideo?videoId=${this.id}&resultNum=21`)
                .then(response => this.videos = response.data)
                .catch(error => console.log(error));
        }
    }
</script>


<style scoped>
    a {
        text-decoration: none;
    }
    
    div.row-list {
        margin-left: 12%;
        margin-right: 12%;
    }
    
    div.gallery {
        border: 1px solid #ccc;
        float: left;
        width: 24%;
        margin-right: 5%;
        margin-left: 5%;
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