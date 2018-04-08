<template>
    <div>
        <p v-for="comment in currentComments" :class="{pause: !isPlaying}" :key="comment.id">{{comment.content}}</p>
    </div>
</template>

<script>
var testData = [
  {
    time: 0,
    content: "hahaha1"
  },
  {
    time: 3,
    content: "hahaha2"
  },
  {
    time: 4,
    content: "hahaha3"
  },
  {
    time: 4,
    content: "hahaha4"
  },
  {
    time: 10,
    content: "hahaha5"
  }
];

export default {
  name: "Barrage",
  props: ["isPlaying", "currentTime"],
  data: function() {
    return {
      comments: testData,
      currentIndex: 0,
      currentComments:[],
    };
  },
  watch: {
    currentTime: function(newVal, oldVal) {
      while(this.currentIndex < this.comments.length && this.comments[this.currentIndex].time <= newVal){
          this.currentComments.push(this.comments[this.currentIndex]);
          this.currentIndex = this.currentIndex + 1;
      }
    }
  },
};
</script>

<style scoped>
div {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 315px;
  width: 650px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
p {
  color: white;
  transform: translateX(650px);
  animation: wordmove 10s linear 1s;
}

@keyframes wordmove {
  from {
    transform: translateX(650px);
  }
  to {
    transform: translateX(-100%);
  }
}

.pause {
  animation-play-state: paused;
}
</style>
