<template>
  <div class='container'>
    <barrage-player :videoId="videoId" />
  </div>
</template>

<script>
  import BarragePlayer from "./BarragePlayer";
  
  export default {
    name: "PlayerContainer",
    components: {
      "barrage-player": BarragePlayer
    },
    props: ["videoId"],
  };
</script>

<style scoped>
  .container {
    margin: auto;
    width: 60vw;
    height: 50vh;
    border: 3px solid #e9e9e9;
    margin-top: 1%;
    margin-bottom: 1%;
  }
</style>
