<template>
  <Card class="head">
    <h1 class="logo">
      <img src="@a/imgs/avatar.png" alt="博客" />
    </h1>
    <Menu />
  </Card>
</template>

<script>
import { Menu } from "./components";
export default {
  components: { Menu }
};
</script>

<style lang='scss' scoped>
.head {
  border: 1px solid #000;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
}
.logo {
  height: 50px;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>