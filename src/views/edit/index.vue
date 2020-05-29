<template>
  <div class="edit-page">
    <WangEdit v-model="val" />
  </div>
</template>

<script>
import { WangEdit } from '@c'
export default {
  name: 'Edit',
  components: { WangEdit },
  data() {
    return {
      val: ''
    }
  },
  watch: {
    val(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.edit-page {
  background-color: #fff;
}
</style>