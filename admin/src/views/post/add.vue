<template>
  <div class="edit-page">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="种类" prop="type">
        <PostTypeSelect v-model="ruleForm.type" />
      </el-form-item>
      <el-form-item label="摘要">
        <el-input type="textarea" :rows="2" v-model="ruleForm.intro"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <Upload v-model="fileList"></Upload>
      </el-form-item>
      <el-form-item label="内容" prop="content" class="no-line-higth">
        <MarkdownEditor v-model="ruleForm.content" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { MarkdownEditor } from '@c'
import { PostTypeSelect } from './components'
import { postAddReq } from '@api'
export default {
  name: 'Edit',
  components: { MarkdownEditor, PostTypeSelect },
  data() {
    return {
      fileList: [],
      ruleForm: {
        title: '',
        type: '',
        intro: '',
        content: ''
      },
      rules: {
        title: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        type: [{ required: true, message: '请选择种类', trigger: 'change' }],
        content: [{ required: true, message: '请输入内容', trigger: 'change' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async submit() {
      let { ruleForm: sendData, fileList } = this
      if (fileList.length) {
        sendData.banner = fileList[0].url
      }

      // eslint-disable-next-line no-unreachable
      const res = await postAddReq(sendData)
      if (res.data.code === 200) {
        this.$message.success('添加成功')
        this.$router.push({ name: 'post' })
      }
    }
  },
  watch: {
    'ruleForm.content'() {
      this.$refs.ruleForm.validateField('content')
    }
  }
}
</script>

<style lang='scss' >
@import './style.scss';
</style>