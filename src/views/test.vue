<template>
  <div>test</div>
</template>

<script>
export default {
  created() {
    let text = `
   后台管理项目
    ![image](data:image/png;base64,iVBQYDQjgc7tW38H79C9zIPgY/1d7BNGFF3ggg==) ## [体验地址](http://175.24.138.208/admin) > http://175.24.138.208/admin ## admin-client(前台) ### 技术栈 | 名称 | 说明 | | :--------- | :------- | | vue | vue | | vue-router | 路由 | | vuex | 储存 | | cli3 | 脚手架 | | webpack | 打包工具 | | es6 | es6 |
   `

    console.log(text)

    // var s = 'CN_11223sgsg-dsg23.mtl'

    // var matchReg = /(?<=CN_).*?(?=.mtl)/

    // console.log(s.match(matchReg))
    console.log(text.slice('![image]', ')'))
  }
}
</script>

<style>
</style>