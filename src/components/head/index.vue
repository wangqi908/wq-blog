<template>
  <Card class="head">
    <div class="left-box">
      <h1 class="logo">
        <img src="@a/imgs/avatar.png" alt="博客" />
      </h1>
      <Menu />
    </div>
    <div class="right-box">
      <Link />
    </div>
  </Card>
</template>

<script>
import { Menu, Link } from './components'
export default {
  components: { Menu, Link }
}
</script>

<style lang='scss' scoped>
.head {
  // padding: 0 80px;
  @extend %page-common;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #fff;
  margin-bottom: 20px;
}
.left-box {
  display: flex;
  align-items: center;
}
.logo {
  height: 30px;
  margin-right: 10px;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>