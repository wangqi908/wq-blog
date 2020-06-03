<template>
  <div>
    <p>aa</p>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$toast({
    //   type: 'success',
    //   msg: '成功',
    //   duration: 3
    // })
    console.log(this.$loading)
    this.$loading.show()
    setTimeout(() => {
      this.$loading.hide()
    }, 5000)
  }
}
</script>
