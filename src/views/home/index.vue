<template>
  <div class="home">
    <ArticleItem />
  </div>
</template>

<script>
import { ArticleItem } from './components'
export default {
  components: { ArticleItem }
}
</script>

<style lang='scss' scoped>
.home {
  border: 1px solid #000;
}
</style>
