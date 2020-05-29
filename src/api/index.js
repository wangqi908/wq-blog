import req from './http.js'

export const captcha = () => req('/captcha') //验证码
export const propListReq = params => req('/sys/prop/list', params, 'post') //propList
export const postPageReq = params => req('/post/page', params, 'post') //文章分页
