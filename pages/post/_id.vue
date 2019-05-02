<template>
  <el-row type="flex" justify="center">
    <el-col :sm="18" :md="12" :lg="10">
      <app-post />
      <app-comments />
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
  }
}
</script>
