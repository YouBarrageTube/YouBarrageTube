<template>
    <div class="container">
        <p v-for="comment in currentComments" 
        :class="{pause: !isPlaying}" 
        :key="comment.id"
        :style = "{top: comment.height + '%'}"
        >{{comment.comment}}</p>
    </div>
</template>

<script>
export default {
  name: "Barrage",
  props: ["isPlaying", "playerWidth", "playerHeight", "currentComments"]
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
p {
  display: block;
  position: absolute;
  color: white;
  left: 100%;
  width: 100%;
  animation: wordmove 10s linear;
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
