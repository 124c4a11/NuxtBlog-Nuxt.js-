<template>
  <div class="content-wrap">
    <h1 v-if="!this.controls.title">Add Post</h1>
    <h1 v-else>{{ this.controls.title }}</h1>


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
      title: 'Add Post'
    }
  },

  data () {
    return {
      loading: false,

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
    },

    resetForm(form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap { max-width: 600px; }
</style>
