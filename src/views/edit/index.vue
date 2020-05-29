<template>
  <div class="edit-page">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="种类" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择种类">
          <el-option label="技术" value="1"></el-option>
          <el-option label="随笔" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="contnet">
        <WangEdit v-model="ruleForm.contnet" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { WangEdit } from '@c'
export default {
  name: 'Edit',
  components: { WangEdit },
  data() {
    return {
      ruleForm: {
        title: '',
        type: '',
        contnet: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        type: [{ required: true, message: '请选择种类', trigger: 'change' }],
        contnet: [{ required: true, message: '请输入内容', trigger: 'change' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    'ruleForm.contnet'() {
      this.$refs.ruleForm.validateField('contnet')
    }
  }
}
</script>

<style scoped>
.edit-page {
  background-color: #fff;
  padding: 20px;
}
</style>