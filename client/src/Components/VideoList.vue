<template>
  <div>
        <h1>Show video list</h1>
        <div v-for="video in videos" :key="video.id">
    	    <div>
    		    <a :href='video.url'>
                    <img :src='video.img_url' align="middle">
    	        </a>
            </div>
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
  created: function(){
    $.getJSON('https://raw.githubusercontent.com/ZhenguoChen/Data-Science-Kaggle-/master/videos.json')
    .done(data => {this.videos = data;})
}
}
</script>


<style scoped>
img {
    position: relative;
    float: left;
    width:  300px;
    height: 300px;
    margin-right: 3%;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}
</style>
