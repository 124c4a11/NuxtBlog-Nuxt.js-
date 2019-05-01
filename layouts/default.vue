<template>
  <el-container>
    <el-header>
      <app-navigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  border-bottom: 1px solid #e6e6e6;
  text-align: center;
}
</style>
