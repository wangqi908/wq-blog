<template>
  <div class="rigth-box" v-if="!$store.state.isShowRightDom">
    <Recent />
  </div>
</template>

<script>
import { Recent } from '@c'
export default {
  components: { Recent }
}
</script>

<style scoped lang='scss'>
.rigth-box {
  border: 1px solid #000;
  margin-left: 10px;
}
@media (max-width: 400px) {
  .rigth-box {
    margin-right: 0;
  }
}
</style>