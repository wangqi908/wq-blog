const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const logger = require('morgan')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const captchaRouter = require('./routes/captcha')
const userRouter = require('./routes/user')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
const uploadRouter = require('./routes/upload')
const postRouter = require('./routes/post')
const sysRouter = require('./routes/sys')
const tokenTool = require('./utils/token.js')

const app = express()
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)

// post载荷大小
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 统一验证token
app.use((req, res, next) => {
  let { authorization } = req.headers
  let { pathname } = req._parsedUrl
  let freeUrls = [
    '/',
    '/blog',
    '/blog/',
    '/blog/login',
    '/blog/captcha',
    '/blog/register',
    '/blog/upload',
    '/blog/post/page',
    '/blog/post/view',
    '/blog/sys/prop/list',
    '/blog/sys/prop/view'
  ] //不需要验证token的接口地址
  let isVerifyToken = freeUrls.indexOf(pathname) === -1 //是否需要验证token
  if (isVerifyToken) {
    let verifyToken = tokenTool.verifyToken(authorization)
    if (verifyToken === 'Token Invalid') {
      res.send({ code: 1, msg: 'Token Invalid' })
    } else {
      next()
    }
  } else {
    next()
  }
})

app.use('/blog', indexRouter)
app.use('/blog/captcha', captchaRouter)
app.use('/blog/user', userRouter)
app.use('/blog/login', loginRouter)
app.use('/blog/register', registerRouter)
app.use('/blog/upload', uploadRouter)
app.use('/blog/post', postRouter)
app.use('/blog/sys', sysRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
