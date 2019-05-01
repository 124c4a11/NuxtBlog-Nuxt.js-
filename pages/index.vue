<template>
  <el-row type="flex" justify="center">
    <el-col :sm="18" :md="12" :lg="10">
      <app-post-card
        v-for="post in 3"
        :key="post"

      />
    </el-col>
  </el-row>
</template>


<script>
import AppPostCard from '@/components/main/PostCard.vue'

export default {
  head: {
    title: 'Home'
  },

  components: {
    AppPostCard
  }
}
</script>
