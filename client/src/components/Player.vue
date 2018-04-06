<template>
  <div>
  </div>
</template>

<script>
import iframe from '../scripts/iframe';

export default {
    name: 'Player',
    mounted(){
        console.log(this);
        this.player = new iframe(this.$el,'A0D1h30kXlI');
    }
}
</script>

<style scoped>
    
</style>
