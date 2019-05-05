<template>
  <div class="content-wrap">
    <h1 v-if="!controls.title">Add Post</h1>
    <h1 v-else>{{ controls.title }}</h1>


    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Title" prop="title">
        <el-input v-model="controls.title" />
      </el-form-item>
      <el-form-item label="Text in .md or .html format" prop="text">
        <el-input type="textarea" :rows="10" v-model="controls.text" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          native-type="submit"
          type="primary"
          round
        >Add Post</el-button>
        <el-button
          @click="previewVisible = true"
          type="success"
          icon="el-icon-view"
          round
        >Preview</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="Preview"
      :visible.sync="previewVisible"
    >
      <div :key="controls.text">
        <vue-markdown>{{controls.text}}</vue-markdown>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="previewVisible = false" round>Close</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

  head() {
    return {
      title: 'Add Post'
    }
  },

  data () {
    return {
      loading: false,

      previewVisible: false,

      controls: {
        title: '',
        text: ''
      },

      rules: {
        title: [
          { required: true, message: 'Please input title', trigger: 'blur' }
        ],

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
              title: this.controls.title,
              text: this.controls.text
            }

            await this.$store.dispatch('posts/create', formData)

            this.$refs.form.resetFields()
            this.loading = false

            this.$message.success('Post added!')
          } catch (err) {
            this.loading = false
          }
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap { max-width: 600px; }
</style>
