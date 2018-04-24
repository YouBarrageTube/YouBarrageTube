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
                id: this.$route.params.id,
                prevPageToken: "",
                nextPageToken: "",
                message: ""
            };
        },
        props: [
            'videoID'
        ],
        watch: {
            '$route.params.id': function(newID) {
                this.id = this.$route.params.id;
                this.nextPageToken = "";
                this.prevPageToken = "";
                axios.get(`/v1/video/relatedVideo?videoId=${this.id}&resultNum=21&pageToken=${this.nextPageToken}`)
                    .then(response => {
                        this.videos = response.data.videos;
                        this.nextPageToken = response.data.nextPageToken;
                        this.prevPageToken = response.data.prevPageToken;
                    })
                    .catch(error => console.log(error));
    
            }
        },
        methods: {
            loadMore: function() {
                this.message = "loading more";

                if(this.prevPageToken !== "" && this.nextPageToken === ""){
                    this.message = "";
                }else{
                    axios.get(`/v1/video/relatedVideo?videoId=${this.id}&resultNum=21&pageToken=${this.nextPageToken}`)
                    .then(response => {
                        this.videos = this.videos.concat(response.data.videos);
                        this.nextPageToken = response.data.nextPageToken;
                        this.prevPageToken = response.data.prevPageToken;
                    })
                    .catch(error => console.log(error));
                    this.message = "";
                }
            }
        },
        mounted: function() {
            axios.get(`/v1/video/relatedVideo?videoId=${this.id}&resultNum=21&pageToken=${this.nextPageToken}`)
                .then(response => {
                        this.videos = response.data.videos;
                        this.nextPageToken = response.data.nextPageToken;
                        this.prevPageToken = response.data.prevPageToken;
                    })
                .catch(error => console.log(error));
        },
        created() {
            var that = this;
            window.onscroll = function() {
                var d = document.documentElement;
                var offset = d.scrollTop + window.innerHeight;
                var height = d.offsetHeight;
    
                if (offset === height) {
                    that.loadMore();
                }
            };
        }
    }
</script>


<style scoped>
    a {
        text-decoration: none;
        color: black;
        line-height: 1.5;
        font-size: 1vw;
    }
    
    a:visited {
        color: gray;
    }
    
    div.row-list {
        margin-left: 12%;
        margin-right: 12%;
    }
    
    div.gallery {
        border: 1px solid white;
        float: left;
        width: 24%;
        margin-right: 5%;
        margin-left: 5%;
        margin-bottom: 1%;
        margin-top: 1%;
    }
    
    div.gallery:nth-child(3n+3) {
        margin-right: 0%;
    }
    
    div.gallery:hover {
        border: 1px solid #e9e9e9;
    }
    
    div.gallery img {
        width: 100%;
        height: auto;
    }
    
    div.desc {
        padding: 5%;
        text-align: center;
        height: 4vw;
    }
</style>