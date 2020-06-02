/* 
登录模块
*/
const express = require('express')
const router = express.Router()
// 引入md5 加密函数库
const md5 = require('blueimp-md5')
// 引入UserModel
const UserModel = require('../db/models').UserModel
const filter = { __v: 0, password: 0 } // 查询时过滤出指定的属性

const tokenTool = require('../utils/token.js')

router.post('/', (req, res) => {
  const { username, password, captcha } = req.body
  // console.log(req.session.captchaValue)
  if (!username) {
    res.send({ code: 0, msg: '请输入用户名' })
    return
  }
  if (!password) {
    res.send({ code: 0, msg: '请输入密码' })
    return
  }
  // if (!captcha) {
  //   res.send({ code: 0, msg: '请输入验证码' })
  //   return
  // }

  // if (captcha.toLowerCase() !== req.session.captchaValue) {
  //   res.send({ code: 0, msg: '验证码有误' })
  //   return
  // }
  // 2. 处理数据: 根据username 和password 去数据库查询得到user
  UserModel.findOne({ username, password: md5(password) }, filter, async (err, user) => {
    if (err) {
      res.send({ code: 0, msg: JSON.stringify(err) })
      return
    }
    if (!user) {
      res.send({ code: 0, msg: '用户名或密码错误' })
    } else {
      let { _id, username } = user

      // 3.2. 如果user 有值, 返回user
      const token = tokenTool.createToken({ _id, username })
      res.send({ code: 200, data: { _id, username, token } })
    }
  })
})

module.exports = router
