<template>
  <div>
    <h2>Create User</h2>
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
        >Create User</el-button>
        <el-button @click="resetForm('form')" round>Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  layout: 'admin',

  middleware: ['admin-auth'],

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
              login: this.controls.login,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/createUser', formData)

            this.$message.success('New user created!')

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

<style lang="scss" scoped>
  .el-form { max-width: 600px; }
</style>
