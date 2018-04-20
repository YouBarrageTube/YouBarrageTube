<template>
  <div class="container">
    <p v-for="comment in comments" 
    :key = "comment.id">{{comment.comment}}</p>
    <p v-for="comment in addedComment" 
    :key = "comment.id">{{comment}}</p>
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
  width: 19%;
  background-color: white;
}
</style>
