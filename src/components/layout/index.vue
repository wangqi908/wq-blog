<template>
  <div class="wrapper">
    <Head class="header" />
    <div class="layout section">
      <router-view />
    </div>
    <Foot class="footer" />
  </div>
</template>

<script>
import { Head, Foot } from '@c'

export default {
  components: { Head, Foot }
}
</script>

<style scoped lang='scss'>
.wrapper {
  display: flex;
  flex-direction: column;
  background-color: $bgc;
  min-height: 100%;
}
.header {
  flex: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.section {
  flex: 1;
}
.footer {
  flex: 0;
}

.layout {
  padding-top: 60px;
  @extend %page-common;
}
</style>