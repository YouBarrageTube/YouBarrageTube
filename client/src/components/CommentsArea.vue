<template>
  <div class="container">
    <div class = "comments">
      <p class="comment" v-for="comment in comments" 
      :key = "comment.id">{{comment.comment}}</p>
    </div>
    <div class="input">
      <input v-model="newComment" type="text">
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
  width: 29%;
}
.comments {
  display: block;
  height: 90%;
  width: 100%;
  overflow: scroll;
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
  padding: 0;
  height:100%;
  width: 70%;
}

.comment {
  margin: 0;
  padding: 2px;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  text-indent: 0.5em;
}
</style>
