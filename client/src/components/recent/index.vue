<template>
  <Card class="recent">
    <div class="title">最近更新</div>
    <div class="list-box">
      <div class="item">
        <a href="https://github.com/wangqi908" target="_blank">
          <img class="post-pic" src="@a/imgs/avatar.png" alt="博客" />
        </a>
        <div class="content">
          <div class="time">2020-04-01</div>
          <a href="https://github.com/wangqi908" target="_blank">
            <div class="post-title">Geng Started with Icacarus</div>
          </a>
        </div>
      </div>
      <div class="item">
        <a href="https://github.com/wangqi908" target="_blank">
          <img class="post-pic" src="@a/imgs/avatar.png" alt="博客" />
        </a>
        <div class="content">
          <div class="time">2020-04-01</div>
          <a href="https://github.com/wangqi908" target="_blank">
            <div
              class="post-title"
            >Geng StartGeng Started with IcacarusGeng Started wng Started with IcacarusGeng Started with Icacarused with Icacarus</div>
          </a>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.recent {
  border-radius: 4px;
  width: 200px;
  margin-bottom: 10px;

  .title {
    font-size: 14px;
    color: $titleText;
    margin-bottom: 10px;
  }

  .item {
    display: flex;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border: 0;
    }
  }
  .post-pic {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    padding: 10px 0;
  }
  .content {
    padding: 10px 0;
  }
  .time {
    font-size: 12px;
    color: $mainText;
    margin-bottom: 6px;
  }
  .post-title {
    color: $titleText;
    font-size: 14px;
  }
}
@media (max-width: $small-width) {
  .recent {
    width: 100%;
    margin-right: 0;
  }
}
</style>