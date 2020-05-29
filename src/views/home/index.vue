<template>
  <div>
    <div class="home">
      <div class="left-box">
        <Person />
        <Recent v-if="isShowRightDom" />
      </div>
      <div class="middle-box">
        <List />
      </div>
      <div class="rigth-box" v-if="!isShowRightDom">
        <Recent />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { Person, Recent } from '@c'
import { List } from './components'
export default {
  components: { Person, Recent, List },
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
  },
  computed: {
    ...mapState(['isShowRightDom'])
  }
}
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  .left-box {
    border: 1px solid #000;
    margin-right: 10px;
  }
  .middle-box {
    flex: 1;
  }
  .rigth-box {
    border: 1px solid #000;
    margin-left: 10px;
  }
}
</style>
