<template>
  <div>
    <h1>Post List</h1>
    <el-table
      :data="posts"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="Title"
      />
      <el-table-column
        label="Date"
      >
        <template slot-scope="{ row: { date } }">
          <span class="el-icon-time"></span>
          <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="views"
        label="Views"
      >
        <template slot-scope="{ row: { views } }">
          <span class="el-icon-view"></span>
          <span style="margin-left: 10px">{{ views }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="comments"
        label="Comments"
      >
        <template slot-scope="{ row: { comments } }">
          <span class="el-icon-message"></span>
          <span style="margin-left: 10px">{{ comments.length }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="{ row }">
          <el-tooltip effect="dark" content="Edit Post" placement="top">
            <el-button
              type="success"
              icon="el-icon-edit"
              circle
              @click="open(row._id)"
            />
          </el-tooltip>
          <el-tooltip effect="dark" content="Remove Post" placement="top">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="remove(row._id)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],


 async asyncData({ store }) {
    const posts = await store.dispatch('posts/fetchAdminPosts')
    return posts
  },

  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },

    async remove(id) {
      try {
        await this.$confirm('Delete this post?', 'Attention!', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })

        await this.$store.dispatch('posts/remove', id)

        this.posts = this.posts.filter((post) => post._id !== id)

        this.$message.success('Post deleted!')
      } catch (err) { }
    }
  }
}
</script>
