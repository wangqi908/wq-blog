<template>
  <div>
    <Head />
    <div class="layout">
      <LeftSide />
      <router-view class="router-view" />
      <RightSide />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Head } from '@c'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
export default {
  components: { Head, LeftSide, RightSide },
  data() {
    return {
      smallWidth: 400
    }
  },
  methods: {
    ...mapMutations(['setShowRightDom']),
    watchClientWidth() {
      let clientWidth = document.body.clientWidth
      this.setShowRightDom(clientWidth < this.smallWidth)
    },
    handleClientWidth() {
      this.watchClientWidth()
      window.addEventListener('resize', () => {
        this.watchClientWidth()
      })
    }
  },
  mounted() {
    this.handleClientWidth()
  }
}
</script>

<style scoped lang='scss'>
.layout {
  display: flex;
  @extend %page-common;

  .router-view {
    flex: 1;
  }
}
</style>