<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item label="Message" prop="text">
      <el-input v-model.trim="controls.text" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button native-type="submit" type="primary" round>Add comment</el-button>
      <el-button @click="resetForm('form')" round>Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
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
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    resetForm(form) {
      this.$refs[form].resetFields();
    }
  }
}
</script>

