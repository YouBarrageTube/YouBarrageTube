<template>
    <div class="container">
      <transition-group name="word" tag="p" @after-enter = "afterEnter">
        <p v-for="(comment,index) in currentComments" 
        :class="{pause: !isPlaying}" 
        :key="index"
        :style = "{top: comment.height + '%'}"
        class = "comment"
        >{{comment.comment}}</p>
      <transition-group/>
    </div>
</template>

<script>
export default {
  name: "Barrage",
  props: ["isPlaying", "currentComments"],
  methods:{
    afterEnter: function(el){
      console.log(el);
    }
  }
};
</script>

<style scoped>
.container {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.word-enter-active{
    animation: wordmove 10s linear;
}

.comment {
  pointer-events: none;
  user-select: none;
  font-size: 1.15em;
  /* z-index: 100; */
  display: inline-block;
  position: absolute;
  width:100%;
  color: white;
  left: 100%;
  /* animation: wordmove 10s linear; */
}

@keyframes wordmove {
  from {
    left: 100%;
  }
  to {
    left: -100%;
  }
}

.pause {
  animation-play-state: paused;
}
</style>
