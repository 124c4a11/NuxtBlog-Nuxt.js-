<template>
  <el-row type="flex" justify="center">
    <el-col :sm="18" :md="12" :lg="10">
      <app-post :post="post" />
      <app-comments :comments="post.comments" :postId="post._id" />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
import AppComments from '@/components/main/Comments/Comments'

export default {
  validate({ params }) {
    return Boolean(params.id)
  },

  components: {
    AppPost,
    AppComments
  },

  async asyncData({ store, params }) {
    const post = await store.dispatch('posts/fetchPostById', params.id)

    await store.dispatch('posts/addView', post)

    return {
      post: {
        ...post,
        views: ++post.views,
        comments: post.comments.reverse()
      }
    }
  }
}
</script>
