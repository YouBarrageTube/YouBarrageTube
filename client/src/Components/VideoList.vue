<template>
    <div>
        <span v-for="video in videos" :key="video.id">
         
                <a :href='video.id'>
                    <router-link :to="`/videos/videoID`">
                        <figure>
                            <p>
                                <img :src="video.thumbnail" alt="video image">
                                <figcaption>{{video.title}}</figcaption>
                        </figure>
                        <!-- <div class="thumbnail-container">
                            <img :src='video.thumbnail' align="middle"> {{video.title}}
                        </div> -->
                    </router-link>
                </a>
        
        </span>
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

    div {
        margin-left: 10%;
        margin-right: 10%;
    }
    
    /* figure {
        position: relative;
        float: left;
        width: 25%;
        height: auto;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 3%;
        margin-bottom: 3%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
    } */

    /* img {
        width: 100%;
        height: 100%;
    } */
    span {
        width: 33%;
        height: auto;
    }

    figure {
        /* position: relative; */
        display: inline-block;
        /* float: left; */
        width: 33%;
        height: auto;
        margin-top: 1%;
        margin-bottom: 3%;
        /* background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover; */
        text-align: center;
    }

    img {
        width: 75%;
        height: 75%;
    }
</style>
