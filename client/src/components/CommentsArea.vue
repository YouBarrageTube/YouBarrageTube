<template>
  <div class="container">
    <table class = "comments">
      <tr class="comment-title">
        <th class = "time">Time</th>
        <th class = "content">Content</th>
      </tr>
      <tr class="comment" v-for="(comment,index) in comments" 
      :key = "index">
      <td class = "time">{{Math.floor(comment.videoTime/60)}}:{{comment.videoTime%60}}</td> 
      <td class = "content">{{comment.comment}}</td>
      </tr>
    </table>
    <!-- <div class = "title">
      <div class = "time-title">Time</div>
      <div class = "content-title">Content</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CommentsArea",
  props: ["comments"],
};
</script>

<style scoped>
.container {
  float: left;
  /* display: inline-block; */
  height: 100%;
  width: 29%;
  color: #99a2aa;
}

/* .title{
  display:inline-block;
  margin-top:1%;
  width:100%;
  height:auto;
}

.time-title{
  display:inline-block;
  padding-left: 4%;
  width:31%;
}

.content-title{
  display:inline-block;
  width:63%;
}

.time{
  display:inline-block;
  padding-left: 2%;
  width:33%;
}

.content-title{
  display:inline-block;
  width:63%;
} */
.comments {
  cursor: default;
  display: block;
  height: 100%;
  width: 100%;
  overflow: scroll;
}

.comment{
  display:block;
  margin: 0;
  color: #99a2aa;
  font-size: 0.8em;
}

.comment-title{
  display:block;
  margin: 0;
  color: #99a2aa;
  font-size: 0.9em;
}

.comment:hover{
  color: #00a1d6;
}

.time{
  display: inline-block;
  width:25%;
  text-align: left;
  text-indent: 0.8rem;
}

.content{
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  width:70%;
  text-align: left;
}
</style>
