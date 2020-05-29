<template>
  <div class="foot">
    <div class="left-box">
      <img class="avatar" src="@a/imgs/avatar.png" alt="博客" />
      <p class="tip">© 2020 Powered by WangQi</p>
    </div>
    <div class="right-box">
      <IconLink />
    </div>
  </div>
</template>

<script>
import IconLink from '../iconLink'
export default {
  components: { IconLink }
}
</script>

<style lang='scss' scoped>
.foot {
  background-color: #fff;
  border-top: 1px solid #ccc;
  @extend %page-common;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .left-box {
    .avatar {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
    .tip {
      font-size: 12px;
    }
  }
  .right-box {
    display: flex;
    align-items: center;
  }
}
@media (max-width: $small-width) {
  .foot {
    justify-content: center;
    flex-direction: column;
  }

  .left-box,
  .right-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>