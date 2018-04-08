<template>
  <div>
  </div>
</template>

<script>
import iframe from '../scripts/iframe';

export default {
    name: 'Player',
    props:['isPlaying'],
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
        console.log(this);
        this.player = new iframe(this.$el,'A0D1h30kXlI');
        var that = this;
        setInterval(function(){
            that.$emit('onTimeUpdate', Math.floor(that.player.player.getCurrentTime()));
        }, 1000);
    }
}
</script>

<style scoped>

</style>
