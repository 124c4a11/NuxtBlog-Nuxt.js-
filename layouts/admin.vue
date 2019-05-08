<template>
  <el-container>
    <el-aside width="250px">
      <app-aside />
    </el-aside>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
  components: {
    AppAside
  },

  computed: {
    error() {
      return this.$store.getters.error
    }
  },

  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    }
  }
}
</script>


<style lang="scss" scoped>
  .el-container { height: 100vh; }
</style>
