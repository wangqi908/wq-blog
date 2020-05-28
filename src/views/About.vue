<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>按钮</button>
  </div>
</template>
<script>
import { captcha } from '@/apis'
export default {
  data() {
    return {
      captcha: '',
      pic: ''
    }
  },
  methods: {
    async getCaptchaPic() {
      const res = await captcha()
      if (res.data.code !== 200) return
      this.pic = res.data.data
    },
    keyEnter() {
      this.$emit('keyenter')
    }
  },
  created() {
    this.getCaptchaPic()
  },
  watch: {
    captcha(val) {
      this.$emit('update:captcha', val)
    }
  }
}
</script>