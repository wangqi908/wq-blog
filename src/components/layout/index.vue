<template>
  <div>
    <Head />
    <div class="layout">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Head } from '@c'
export default {
  components: { Head }
}
</script>
<style scoped lang='scss'>
.layout {
  @extend %page-common;
}
</style>