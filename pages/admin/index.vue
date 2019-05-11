<template>
  <div>
    <h1>Analytics</h1>
    <app-analytics-chart
      :title="'Number of views'"
      :labels="views.labels"
      :data="views.data"
    />
    <app-analytics-chart
      :title="'Number of comments'"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'

export default {
  layout: 'admin',

  head: {
    title: `Analytics | ${process.env.appName}`
  },

  middleware: ['admin-auth'],

  components: {
    AppAnalyticsChart
  },

  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('posts/getAnalytics')
    return { views, comments }
  }
}
</script>
