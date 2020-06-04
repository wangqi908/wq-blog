<template>
  <div>
    <p>aa</p>
    <button @click="show">提示</button>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$toast({ msg: '成功成功成功' })
    }
  },
  mounted() {
    // this.$loading.show()
  }
}
</script>
