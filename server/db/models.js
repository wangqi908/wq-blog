/*
包含n 个能操作mongodb 数据库集合的model 的模块
1. 连接数据库
1.1. 引入mongoose
1.2. 连接指定数据库(URL 只有数据库是变化的)
1.3. 获取连接对象
1.4. 绑定连接完成的监听(用来提示连接成功)
2. 定义出对应特定集合的Model 并向外暴露
2.1. 字义Schema(描述文档结构)
2.2. 定义Model(与集合对应, 可以操作集合)
2.3. 向外暴露Model
*/
/*1. 连接数据库*/
// 1.1. 引入mongoose
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
// 1.2. 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/wq_blog', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if (err) {
    console.log(res)
  }
})

// 1.3. 获取连接对象
const conn = mongoose.connection
// 1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', function () {
  console.log('数据库连接成功!')
})

/*2. 定义出对应特定集合的Model 并向外暴露*/
// 2.1. 字义Schema(描述文档结构)
const userSchema = mongoose.Schema({
  username: { type: String, required: true }, // 用户名
  password: { type: String, required: true }, // 密码
  avatar: { type: String }, // 头像
  remark: { type: String }, // 备注
  createTime: {
    type: String,
    default: +new Date()
  }
})
// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('user', userSchema)

// 百度Access相关内容
const accessSchema = mongoose.Schema({
  expires_in: { type: Number, required: true }, // 过期时间
  access_token: { type: String, required: true }, // access_token
  refresh_token: { type: String, required: true }, // refresh_token
  session_key: { type: String, required: true }, // session_key
  createTime: {
    type: Number,
    default: +new Date()
  },
  updateTime: {
    type: Number,
    default: +new Date()
  }
})
const AccessSchema = mongoose.model('bdAccess', accessSchema)

// 文章
const postSchema = mongoose.Schema({
  title: { type: String, required: true }, //文章名称
  type: { type: String, required: true }, // 文章类型
  content: { type: String, required: true }, // 文章内容
  intro: { type: String }, // 摘要
  banner: { type: String }, // 摘要图
  createTime: {
    type: Number,
    default: +new Date()
  }
})
const PostSchema = mongoose.model('post', postSchema)

// 属性表
const propSchema = mongoose.Schema({
  title: { type: String, required: true }, //描述
  type: { type: String, required: true }, // 类型
  value: { type: String, required: true }
})

const PropSchema = mongoose.model('prop', propSchema)

// 向外暴露Model
module.exports = {
  UserModel,
  AccessSchema,
  PostSchema,
  PropSchema
}
