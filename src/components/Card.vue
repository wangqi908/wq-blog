<template>
  <div :class="['card',show?'scale':'']">
    <slot></slot>
  </div>
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
  }
}
</script>

<style lang='scss' scoped>
.card {
  opacity: 0;
  transform: scale(0.8);
  transform-origin: center top;
}
.scale {
  transform: scale(1);
  opacity: 1;
  transition: all 0.5s;
}
</style>
