<template>
  <div>
    <PostItem v-for="item in list" :key="item._id" :info="item" />
  </div>
</template>

<script>
import { postPageReq } from '@api'
import PostItem from './PostItem'
export default {
  name: 'postList',
  components: { PostItem },
  data() {
    return {
      list: [],
      count: ''
    }
  },
  methods: {
    async getPageInfo() {
      let data = {
        pageSize: 13,
        pageNum: 0,
        data: {}
      }
      const res = await postPageReq(data)
      if (res.data.code !== 200) return
      let { list, count } = res.data.data
      this.list = list
      this.count = count
    }
  },
  created() {
    this.getPageInfo()
  }
}
</script>

<style>
</style>