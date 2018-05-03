<template>
  <div style="width:100%;height:100%">
  </div>
</template>

<script>
import iframe from "../scripts/iframe";

export default {
  name: "Player",
  props: ["isPlaying", "videoId"],
  watch: {
    videoId: function(newVal, oldVal) {
      this.player.player.loadVideoById(newVal);
    }
  },
  mounted() {
    this.player = new iframe(
      this.$el,
      this.videoId,
      this
    );
    var that = this;
    setInterval(function() {
      that.$emit(
        "onTimeUpdate",
        Math.floor(that.player.player.getCurrentTime())
      );
    }, 1000);
  },
  beforeDestroy(){
      this.player.player.destroy();
  }
};
</script>

<style scoped>

</style>
