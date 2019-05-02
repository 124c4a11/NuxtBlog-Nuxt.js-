<template>
  <el-row type="flex" justify="center">
    <el-col :sm="18" :md="12" :lg="10">
      <app-post />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'

export default {
  validate({ params }) {
    return Boolean(params.id)
  },

  components: {
    AppPost
  }
}
</script>
