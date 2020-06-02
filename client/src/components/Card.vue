<template>
  <transition name="scale">
    <div v-if="show" class="card">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  },
  destroyed() {
    this.show = false
  }
}
</script>

<style lang='scss'>
.card {
  padding: 20px;
  background-color: #fff;
  box-shadow: $shadow;
}

.scale-enter-active,
.scale-leave-active {
  transform: scale(1, 1);
  opacity: 1;
  transition: all 0.6s;
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(1, 0.2);
  transform-origin: center top;
}
</style>
