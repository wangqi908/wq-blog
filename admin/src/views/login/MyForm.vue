<template>
  <div class="login-form">
    <h2 class="title">系统登录</h2>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item prop="username">
        <el-input
          v-model.number="ruleForm.username"
          placeholder="用户名"
          @keyup.enter.native="submitForm('ruleForm')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="密码"
          show-password
          @keyup.enter.native="submitForm('ruleForm')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="captcha">
        <Captcha :captcha.sync="ruleForm.captcha" @keyenter="submitForm('ruleForm')" />
      </el-form-item>

      <el-form-item class="footer">
        <el-button type="primary" @click="submitForm('ruleForm')" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { loginReq } from '@api'
import { Captcha } from '@c'
import {
  usernameValidator,
  loginPasswordValidator,
  captchaValidator
} from '@/utils/validator'
export default {
  components: { Captcha },
  data() {
    return {
      loading: false,
      ruleForm: {
        password: '',
        username: '',
        captcha: ''
      },
      rules: {
        username: usernameValidator,
        password: loginPasswordValidator,
        captcha: captchaValidator
      }
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    ...mapActions(['getPropListAction']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    async login() {
      let { username, password, captcha } = this.ruleForm
      let sendData = { username, password, captcha }
      this.loading = true

      try {
        const res = await loginReq(sendData)
        this.loading = false
        if (res.data.code !== 200) return
        let token = res.data.data.token
        this.setToken(token)

        this.getPropListAction().then(() => {
          let path = this.$route.query.re || '/'
          this.$router.push(path)
        })
      } catch (err) {
        this.loading = false
      }
    }
  },
  created() {
    this.setToken()
  }
}
</script>

<style lang="scss">
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 160px;
  .title {
    text-align: center;
    margin-bottom: 30px;
    color: rgb(226, 226, 226);
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .submit {
    width: 100%;
    color: #fff;
    border: 0;
    background: #7d7de8;
    &:hover {
      background: #9e9ef3;
    }
    &:focus {
      background: #5454db;
    }
    &:active {
      background: #5454db;
    }
  }
  .tip {
    color: rgb(226, 226, 226);
    font-size: 14px;
    span {
      margin-right: 10px;
    }
  }
}
</style>