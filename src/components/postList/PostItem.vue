<template>
  <Card class="item">
    <a href="https://github.com/wangqi908" class="pic">
      <img class="post-pic" src="@a/imgs/pic.png" alt="博客" />
    </a>
    <div class="content">
      <div class="time">2020-04-01</div>
      <a href="https://github.com/wangqi908" class="title">Icarus User Guide - Configuring the Theme</a>
      <p class="intro">
        Icarus’ default theme configuration file is themes/icarus/_config.yml.
        It defines the global layout and style settings of the theme and controls external features such as plugins and widgets.
        This article details the general configurations of the theme.
        It also explains what configuration files are used and how Icarus generate and validate these configurations.
      </p>
      <a href="https://github.com/wangqi908" class="btn">阅读全文</a>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'postItem'
}
</script>

<style lang='scss' scoped>
.item {
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  .pic {
    width: 100%;
    img {
      width: 100%;
      max-height: 200px;
    }
  }
  .content {
    padding: 20px 10px;
  }
  .time {
    margin: 10px 0;
    font-size: 12px;
  }
  .title {
    font-size: 16px;
    color: $titleText;
  }
  .intro {
    font-size: 14px;
    margin: 10px 0;
  }
  .btn {
    @extend %btn-common;
  }
}
</style>
