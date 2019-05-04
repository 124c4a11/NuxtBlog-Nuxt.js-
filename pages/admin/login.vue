<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}"
  >
    <h2 class="text-center">Login</h2>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Login" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model.trim="controls.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          native-type="submit"
          type="primary"
          round
        >Enter</el-button>
        <el-button @click="resetForm('form')" round>Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',

  data () {
    return {
      loading: false,

      controls: {
        login: '',
        password: ''
      },

      rules: {
        login: [
          { required: true, message: 'Please input login', trigger: 'blur' }
        ],

        password: [
          { required: true, message: 'Please input password', trigger: 'blur' }
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
              postId: '',
              name: this.controls.login,
              text: this.controls.password
            }

            await this.$store.dispatch('auth/login', formData)

            this.loading = false

            this.$router.push('/admin')
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
