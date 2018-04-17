<template>
    <div class='row-list'>
        <!-- <span v-for="video in videos" :key="video.id">
                                 
                                        <a :href='video.id'>
                                            <router-link :to="`/videos/videoID`">
                                                <figure>
                                                    <p>
                                                        <img :src="video.thumbnail" alt="video image">
                                                        <figcaption>{{video.title}}</figcaption>
                                                </figure>
                                            </router-link>
                                        </a>
                                
                                </span> -->
        <!-- <div class="row">
                        <div class="col-lg-1" v-for="video in videos" :key="video.id">
                            <div class="thumbnail">
                                <a :href='video.id'>
                                    <router-link :to="`/videos/videoID`">
                                        <img :src="video.thumbnail" alt="video image" style="width:100%;float:left">
                                        <div class="caption">
                                            <p>{{video.title}}</p>
                                        </div>
                                        
                                    </router-link>
                                </a>
                            </div>
                        </div>
                    </div> -->
        <div class="gallery" v-for="video in videos" :key="video.id">
            <router-link :to="`/videos/videoID`">
                <a :href='video.id'>
                    <img :src="video.thumbnail" alt="video image">
                </a>
                <div class="desc">{{video.title}}</div>
            </router-link>
        </div>
    
    
    </div>
</template>

<script>
    export default {
        name: 'VideoList',
        data: function() {
            return {
                videos: []
            };
        },
        created: function() {
            $.getJSON('https://raw.githubusercontent.com/ZhenguoChen/Data-Science-Kaggle-/master/videos.json')
                .done(data => {
                    this.videos = data;
                })
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