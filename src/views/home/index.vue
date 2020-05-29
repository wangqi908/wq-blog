<template>
  <div class="home">
    <List />
  </div>
</template>

<script>
import { List } from './components'
export default {
  components: { List }
}
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  border: 1px solid #000;
}
</style>
