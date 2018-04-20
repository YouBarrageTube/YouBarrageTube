<template>
    <div class='container'>
        <barrage-player :videoId="videoId"/>
    </div>
</template>

<script>
import BarragePlayer from "./BarragePlayer";

export default {
  name: "PlayerContainer",
  components: {
    "barrage-player": BarragePlayer
  },
  props: ["videoId"]
};
</script>


<style scoped>
.container {
  margin: auto;
  width: 80%;
  border: 3px solid green;
  padding: 10px;
  margin-bottom: 3%;
}
</style>
