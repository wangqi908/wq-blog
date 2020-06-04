<!-- loading.vue组件 -->
<template>
  <transition name="fade" mode="out-in">
    <div class="vue-toast-msg" v-if="show">{{msg}}</div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    }
  }
}
</script> 

<style lang='scss' scoped>
.vue-toast-msg {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: $toastBgc;
  border-radius: 6px;
  color: #fff;
}
</style>