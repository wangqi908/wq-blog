<template>
  <el-menu :default-active="activeIndex" @select="handleSelect">
    <el-menu-item index="home">首页</el-menu-item>
    <el-submenu index="post">
      <template slot="title">文章</template>
      <el-menu-item index="post">文章</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key })
    }
  },
  created() {
    this.activeIndex = this.$route.name
  },

  watch: {
    $route() {
      this.activeIndex = this.$route.name
    }
  }
}
</script>