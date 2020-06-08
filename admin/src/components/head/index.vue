<template>
  <div class="head">
    <LogoBox />

    <BtnBox />
  </div>
</template>

<script>
import { BtnBox, LogoBox } from './components'
export default {
  components: { BtnBox, LogoBox }
}
</script>

<style lang="scss" scoped>
.head {
  height: 50px;

  padding: 4px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

