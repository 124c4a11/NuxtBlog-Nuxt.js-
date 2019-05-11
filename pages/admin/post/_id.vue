<template>
  <div class="content-wrap">
    <h1>{{ post.title }}</h1>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Text in .md or .html format" prop="text">
        <el-input type="textarea" :rows="10" v-model="controls.text" />
      </el-form-item>
      <el-form-item>
        <small class="mr-1">
          <span class="el-icon-time"></span>
          {{ post.date | date }}
        </small>
        <small>
          <span class="el-icon-view"></span>
          {{ post.views }}
        </small>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          native-type="submit"
          type="primary"
          round
        >Update</el-button>
        <el-button @click="resetForm('form')" round>Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  },

  validate({ params }) {
    return Boolean(params.id)
  },

  async asyncData({ store, params }) {
    const post = await store.dispatch('posts/fetchAdminPostById', params.id)
    return { post }
  },

  data () {
    return {
      loading: false,

      controls: {
        text: ''
      },

      rules: {
        text: [
          { required: true, message: 'Please input text', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true


          try {
            const formData = {
              text: this.controls.text,
              id: this.post._id
            }

            await this.$store.dispatch('posts/update', formData)

            this.$message.success('Post updated!')

            this.loading = false
          } catch (err) {
            this.loading = false
          }
        }
      });
    },

    resetForm(form) {
      this.$refs[form].resetFields()
    }
  },

  mounted() {
    this.controls.text = this.post.text
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap { max-width: 600px; }
</style>
