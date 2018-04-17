<template>
    <div style="width: 80%; height: 100%">
        <span v-for="comment in currentComments" 
        :class="{pause: !isPlaying}" 
        :key="comment.id"
        :style = "{top: comment.height + '%'}"
        >{{comment.comment}}</span>
    </div>
</template>

<script>

export default {
  name: "Barrage",
  props: ["isPlaying",'playerWidth','playerHeight','currentComments'],
  // watch: {
  //   currentTime: function(newVal, oldVal) {
  //     while(this.currentIndex < this.comments.length && this.comments[this.currentIndex].videoTime <= newVal){
  //         this.currentComments.push(this.comments[this.currentIndex]);
  //         this.currentComments[this.currentComments.length - 1].top = Math.floor(Math.random()*this.playerHeight);
  //         this.currentIndex = this.currentIndex + 1;
  //     };
  //     while(this.currentComments[0]&&newVal - this.currentComments[0].videoTime>10){
  //       this.currentComments.shift();
  //     };
  //   },
  //   submitedInput: function(newVal, oldVal){
  //     this.currentComments.push({
  //       comment:newVal,
  //       videoTime: this.currentTime,
  //       top: Math.floor(Math.random()*this.playerHeight)
  //     });
  //     axios.post('/v1/comment',{
  //       videoUrl: this.videoId,
  //       comment: this.submitedInput,
  //       videoTime: this.currentTime
  //     }).then(function(response){
  //       console.log(response.data);
  //     });
  //   }
  // },
  // mounted(){
  //   var that = this;
  //   axios.post('/v1/comments',{
  //     videoUrl: this.videoId,
  //   }).then(function(response){
  //     console.log(that.comments = response.data);
  //   });
  //   while(this.currentIndex < this.comments.length && this.comments[this.currentIndex].videoTime <= 0){
  //     this.currentComments.push(this.comments[this.currentIndex]);
  //     this.currentComments[this.currentComments.length - 1].top = Math.floor(Math.random()*this.playerHeight);
  //     this.currentIndex = this.currentIndex + 1;
  //   }
  //   console.log(this.currentComments);
  // }
};
</script>

<style scoped>
div {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
}
span {
  display: block;
  position: relative;
  color: white;
  transform: translateX(100%);
  animation: wordmove 10s linear 0s;
  width: 100%;
}

@keyframes wordmove {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.pause {
  animation-play-state: paused;
}
</style>
