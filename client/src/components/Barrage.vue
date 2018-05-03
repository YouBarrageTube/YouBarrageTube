<template>
    <div class="container">
    </div>
</template>

<script>
export default {
  name: "Barrage",
  props: ["isPlaying", "comments"],
  methods:{
    afterEnter: function(el){
      console.log(el);
    }
  },
  mounted(){
    console.log(this);
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
  left: 105%;
  /* animation: wordmove 10s linear; */
}

@keyframes wordmove {
  from {
    left: 105%;
  }
  to {
    left: -100%;
  }
}

.pause {
  animation-play-state: paused;
}
</style>
