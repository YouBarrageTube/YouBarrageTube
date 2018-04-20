<template>
  <div class="container">
    <div class = "comments">
      <p class="comment" v-for="comment in comments" 
      :key = "comment.id">{{comment.comment}}</p>
      <p class="comment" v-for="comment in addedComment" 
      :key = "comment.id">{{comment}}</p>
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
      addedComment: []
    };
  },
  methods: {
    onSubmit: function() {
      this.$emit("onNewComment", this.newComment);
      this.addedComment.push(this.newComment);
      console.log(this.addedComment);
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
.comment {
  margin: 0;
  padding: 2px;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  text-indent: 0.5em;
}
</style>
