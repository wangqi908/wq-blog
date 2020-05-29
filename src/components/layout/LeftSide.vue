<template>
  <div class="left-box">
    <Person />
    <Recent v-if="$store.state.isShowRightDom" />
  </div>
</template>

<script>
import { Person, Recent } from '@c'
export default {
  components: { Person, Recent }
}
</script>

<style scoped lang='scss'>
.left-box {
  margin-right: 10px;
}
@media (max-width: 400px) {
  .left-box {
    margin-right: 0;
  }
}
</style>