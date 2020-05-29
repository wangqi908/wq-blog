<template>
  <Card class="person">
    <img class="avatar" src="@a/imgs/avatar.png" alt="博客" />
    <p class="title">王琦</p>
    <p class="sub-title">Web Developer</p>
    <p class="sub-title">
      <span class="iconfont icon-github"></span>
      <span>Shang Hai</span>
    </p>
    <a class="btn" href="https://github.com/wangqi908" target="_blank">Follow</a>
    <div class="icon-box">
      <a class="icon-link" href="https://github.com/wangqi908" target="_blank">
        <span class="iconfont icon-github"></span>
      </a>
      <a class="icon-link" href="https://github.com/wangqi908" target="_blank">
        <span class="iconfont icon-github"></span>
      </a>
      <a class="icon-link" href="https://github.com/wangqi908" target="_blank">
        <span class="iconfont icon-github"></span>
      </a>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.person {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 4px;
  min-width: 200px;
  .avatar {
    width: 100px;
    height: 100px;
  }
  .title {
    font-size: 16px;
    color: $mainText;
    font-weight: 600;
    margin: 10px 0;
  }
  .sub-title {
    font-size: 14px;
    color: $titleText;
    margin-bottom: 6px;
    .iconfont {
      margin-right: 6px;
    }
  }
  .btn {
    width: 100%;
    text-align: center;
    padding: 6px;
    margin: 10px 0;
    border-radius: 20px;
    background-color: $active;
    color: #fff;
    &:hover {
      background-color: $activeHover;
    }
    &:active {
      background-color: $activeActive;
    }
  }
  .icon-box {
    margin-top: 10px;
    .icon-link {
      padding: 10px;
    }
  }
}
</style>