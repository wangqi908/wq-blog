<template>
  <Card class="item">
    <a href="https://github.com/wangqi908" class="pic">
      <img class="post-pic" src="@a/imgs/pic.png" alt="博客" />
    </a>
    <div class="content">
      <div class="time">{{info.createTime}}</div>
      <a href="https://github.com/wangqi908" class="title">{{info.title}}</a>
      <div class="intro" v-html="info.content"></div>
      <a href="https://github.com/wangqi908" class="btn">阅读全文</a>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'postItem',
  props: {
    info: {
      type: Object
    }
  },
  created() {
    console.log(this.info)
  }
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
