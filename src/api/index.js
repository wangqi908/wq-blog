import req from './http.js'
export const uploadReq = params => req('/upload', params, 'upload') //文件上传
export const captcha = () => req('/captcha') //验证码
export const propListReq = params => req('/sys/prop/list', params, 'post') //propList
export const postPageReq = params => req('/post/page', params, 'post') //文章分页
export const postAddReq = params => req('/post/add', params, 'post') //文章添加
export const postViewReq = params => req('/post/view', params, 'post') //文章详情
