<template>
  <el-row type="flex" justify="center">
    <el-col :sm="18" :md="12" :lg="10">
      <app-post :post="post" />
      <app-comments :comments="post.comments" />
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
    return { post }
  }
}
</script>
