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
      <el-form-item label="摘要">
        <el-input type="textarea" :rows="2" v-model="ruleForm.intro"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <Upload v-model="fileList"></Upload>
      </el-form-item>
      <el-form-item label="内容" prop="content" class="no-line-higth">
        <MarkdownEditor
          v-model="ruleForm.content"
          :initialValue="ruleForm.content"
          v-if="ruleForm.content"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { MarkdownEditor } from '@c'
import { postEditReq, postViewReq } from '@api'
export default {
  name: 'Edit',
  components: { MarkdownEditor },
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
      let _id = this.$route.params.id
      let { ruleForm: sendData, fileList } = this
      if (fileList.length) {
        sendData.banner = fileList[0].url
      }
      sendData._id = _id

      // eslint-disable-next-line no-unreachable
      const res = await postEditReq(sendData)
      if (res.data.code === 200) {
        this.$message.success('修改成功')
        this.$router.push({ name: 'post' })
      }
    },
    async getInfo() {
      let _id = this.$route.params.id
      const res = await postViewReq({ _id, isMd: true })
      let {
        content,
        createTime,
        title,
        type,
        banner,
        http,
        intro
      } = res.data.data
      this.ruleForm.content = content
      this.ruleForm.createTime = createTime
      this.ruleForm.title = title
      this.ruleForm.type = type
      this.ruleForm.intro = intro

      if (banner) {
        this.fileList = [
          {
            http: http,
            url: banner
          }
        ]
      }
    }
  },
  created() {
    this.getInfo()
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