<template>
  <div class="layout">
    <div class="head">
      <Head />
    </div>

    <div class="container">
      <Menu class="aside" />
      <div class="main">
        <div class="content">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Head, Menu } from '@/components'
export default {
  components: { Head, Menu },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    logout() {
      this.setToken()
      this.$router.push('/login')
    }
  },
  created() {}
}
</script>

<style lang='scss'>
html,
body {
  width: 100%;
  height: 100%;
}
.layout {
  width: 100%;
  height: 100%;
}
.layout {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: rgb(243, 243, 243);
}
.aside {
  overflow: auto;
  padding-top: 10px;
  width: 160px;
}
.main {
  overflow: auto;
  flex: 1;
  background-color: $mainBgc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .content {
    margin: 10px;
    flex: 1;
  }
}
</style>
