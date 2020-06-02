<template>
  <div class="layout">
    <Head class="header" />
    <section class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </section>

    <Foot class="footer" />
  </div>
</template>

<script>
import { Head, Foot } from '@c'

export default {
  name: 'layout',
  components: { Head, Foot }
}
</script>

<style scoped lang='scss'>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 60px;
  background-color: $bgc;
}

.header {
  flex: 0 0 auto;
  position: fixed;
  top: 0;
  width: 100%;
}

.main-content {
  @extend %page-common;
  flex: 1 0 auto;
  background-color: $bgc;
}

.footer {
  flex: 0 0 auto;
}
</style>