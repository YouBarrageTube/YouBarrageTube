<template>
  <div style="width:100%">
  </div>
</template>

<script>
import iframe from "../scripts/iframe";

export default {
  name: "Player",
  props: ["isPlaying", "videoId", "playerWidth", "playerHeight"],
  watch: {
    videoId: function(newVal, oldVal) {
      this.player.player.loadVideoById(newVal);
    }
  },
  mounted() {
    this.player = new iframe(
      this.$el,
      this.videoId,
      this.playerHeight,
      this.playerWidth,
      this
    );
    var that = this;
    console.log(this);
    setInterval(function() {
      that.$emit(
        "onTimeUpdate",
        Math.floor(that.player.player.getCurrentTime())
      );
    }, 1000);
  }
};
</script>

<style scoped>

</style>
