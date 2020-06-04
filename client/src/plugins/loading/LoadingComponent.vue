<!-- loading.vue组件 -->
<template>
  <div class="vue-loading" v-if="show">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '正在加载中...'
    }
  }
}
</script> 

<style scoped>
.vue-loading {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.vue-loading span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  animation: load 1s ease infinite;
}
@keyframes load {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.vue-loading span:nth-child(2) {
  animation-delay: 0.2s;
}
.vue-loading span:nth-child(3) {
  animation-delay: 0.4s;
}
.vue-loading span:nth-child(4) {
  animation-delay: 0.6s;
}
.vue-loading span:nth-child(5) {
  animation-delay: 0.8s;
}
</style>