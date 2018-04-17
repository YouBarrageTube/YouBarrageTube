<template>
  <div class="container">
    <div class="button">
      <img src = "../assets/play.png" alt="play"/>
    </div>
    <div class="progress-bar">
      <div class="bar">

      </div>
    </div>
    <div class="time">
      <p>0:05/3:33</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerControl',

}
</script>

<style scoped>
  .container{
    display:inline-block;
    width: 80%;
    height: 5%;
    background-color: rgb(200,200,200);
  }
  .button{
    display:inline-block;
    height:100%;
  }
  img{
    height: 100%;
  }
  .progress-bar{
    display:inline-block;
    position: relative;
    height: 100%;
  }
  .bar{
    height: 15%;
    width: 100%;
    border: 2px solid rgb(50,190,166);
    border-radius: 5px;
    background-color: rgb(50,190,166);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .time{
    width: 5%;
    font-size: 100%;
    display: inline-block;
    height: 100%;
    transform: translateY(-30%);
  }
</style>
