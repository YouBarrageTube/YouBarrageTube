<template>
  <div class="container">
    <div class = "comments">
      <p class="comment" v-for="comment in comments" 
      :key = "comment.id">{{comment.comment}}</p>
      <p class="comment" v-for="comment in addedComment" 
      :key = "comment.id">{{comment}}</p>
    </div>
    <input v-model="newComment" type="text">
    <button @click = "onSubmit">Submit</button>
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
  display: inline-block;
  width:29%;
  background-color: white;
}
.comments{
  overflow: scroll;
}
.comment{
  margin:0;
  padding: 0;
  width: 100%;
  border-bottom:2px solid gray;
}
</style>
