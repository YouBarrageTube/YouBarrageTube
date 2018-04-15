<template>
  <div>
  </div>
</template>

<script>
import iframe from '../scripts/iframe';

export default {
    name: 'Player',
    props:['isPlaying','videoId','playerWidth','playerHeight'],
    watch: { 
      	isPlaying: function(newVal, oldVal) { // watch it
            if(oldVal){
                this.player.player.pauseVideo();
            }else{
                this.player.player.playVideo();
            }
        }
    },
    mounted(){
        this.player = new iframe(this.$el,this.videoId, this.playerHeight, this.playerWidth);
        var that = this;
        setInterval(function(){
            that.$emit('onTimeUpdate', Math.floor(that.player.player.getCurrentTime()));
        }, 1000);
    }
}
</script>

<style scoped>

</style>
