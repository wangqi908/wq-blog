<template>
  <div>
    <PostItem v-for="item in list" :key="item._id" :info="item" />
    <Pagination :total="222" :pageSize="10" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
import { postPageReq } from '@api'
import PostItem from './PostItem'
import Pagination from '../pagination'
export default {
  name: 'postList',
  components: { PostItem, Pagination },
  data() {
    return {
      list: [],
      count: '',
      currentPage: 2
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