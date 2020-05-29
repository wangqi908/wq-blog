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

<style lang='scss'>
.card {
  padding: 20px;
  background-color: #fff;
  opacity: 0;
  transform: scale(1, 0.2);
  box-shadow: $shadow;
  transform-origin: center top;
}
.scale {
  transform: scale(1, 1);
  opacity: 1;
  transition: all 0.6s;
}
</style>
