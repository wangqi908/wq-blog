const express = require('express')
const svgCaptcha = require('svg-captcha')
const router = express.Router()
// https://www.npmjs.com/package/svg-captcha

router.get('/', (req, res, next) => {
  const captcha = svgCaptcha.createMathExpr({
    width: 95,
    height: 40,
    ignoreChars: false,
    noise: 0,
    color: true
  })
  console.log(captcha.text)
  req.session.captchaValue = captcha.text.toLowerCase()

  res.send({ code: 200, data: captcha.data })
})

module.exports = router
