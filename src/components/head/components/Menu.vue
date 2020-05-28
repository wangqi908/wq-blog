<template>
  <div class="menu">
    <router-link
      :to="item.path"
      v-for="item in menuList"
      :key="item.id"
      class="item add-transition"
    >{{item.title}}</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("menu", ["menuList"])
  }
};
</script>

<style lang='scss' scoped>
.menu {
  display: flex;
  height: 100%;
}
.item {
  line-height: 50px;
  padding: 0 10px;
  color: $mainText;
  font-size: 14px;
  &:hover {
    background-color: $bgc;
    color: $active;
  }
  &:active {
    background-color: #ebebeb;
  }
}
.router-link-active{
  background-color: $bgc;
}
</style>