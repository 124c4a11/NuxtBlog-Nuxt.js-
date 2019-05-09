<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model="controls.name" />
    </el-form-item>
    <el-form-item label="Message" prop="text">
      <el-input v-model="controls.text" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        native-type="submit"
        type="primary"
        round
      >Add comment</el-button>
      <el-button @click="resetForm('form')" round>Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    postId: {
      type: String
    }
  },

  data () {
    return {
      loading: false,

      controls: {
        name: '',
        text: ''
      },

      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' }
        ],

        text: [
          { required: true, message: 'Please input message', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            postId: this.postId,
            name: this.controls.name,
            text: this.controls.text
          }

          try {
            const newComment = await this.$store.dispatch('comments/create', formData)

            this.$message.success('Comment added')
            this.$emit('created', newComment)

            this.loading = false

            this.$refs.form.resetFields()
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

