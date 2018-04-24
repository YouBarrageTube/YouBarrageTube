<template>
  <div class="container">
    <!-- <div class = "comments">
      <div class = "time">Time</div> 
      <div class = "content">Content</div>
      <div class="comment" v-for="(comment,index) in comments" 
      :key = "index">
      <div class = "time">{{Math.floor(comment.videoTime/60)}}:{{comment.videoTime%60}}</div> 
      <div class = "content">{{comment.comment}}</div>
      </div>
    </div> -->
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
    <div class="input">
      <input v-model="newComment" type="text" placeholder="Type your comment..." @keyup.enter="onSubmit">
      <button @click = "onSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsArea",
  props: ["comments"],
  data: function() {
    return {
      newComment: "",
    };
  },
  methods: {
    onSubmit: function() {
      this.$emit("onNewComment", this.newComment);
      this.newComment = "";
    }
  }
};
</script>

<style scoped>
.container {
  float: left;
  /* display: inline-block; */
  height: 100%;
  width: 30%;
}
.comments {
  cursor: default;
  display: block;
  height: 90%;
  width: 100%;
  overflow: scroll;
  border-bottom:1px solid #e9e9e9;
}

.input{
  display:block;
  height:10%;
}

input{
  box-sizing: border-box;
  display:inline-block;
  font-size: 100%;
  margin: 0;
  margin-left: 3%;
  padding: 0;
  height:95%;
  width: 70%;
  border: none;
}

input:focus{
  border:none;
  outline: none;
}

input::-webkit-input-placeholder{
  color:#99a2aa;
  font-size: 0.8em;
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

button{
  border:none;
}

button:active{
  border:none;
  outline:none;
}

button:focus{
  border:none;
  outline:none;
}
</style>
