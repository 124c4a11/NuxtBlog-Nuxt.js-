<template>
  <div>
    <h2 class="comments-title">Comments:</h2>
    <app-comment-form />
    <app-comment-list v-if="comments.length" :comments="comments" />
    <p v-else class="text-center"><b>No comments.</b></p>
  </div>
</template>

<script>
import AppCommentList from './CommentList';
import AppCommentForm from './CommentForm';

export default {
  components: {
    AppCommentList,
    AppCommentForm
  },

  props: {
    comments: {
      type: Array
    }
  }
}
</script>


<style lang="scss" scoped>
.comments-title { font-size: 1.3em; }
</style>
