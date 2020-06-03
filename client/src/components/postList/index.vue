<template>
  <div>
    <PostItem v-for="item in list" :key="item._id" :info="item" />

    <Pagination
      :total="count"
      :pageSize="pageSize"
      :currentPage.sync="currentPage"
      @current-change="currentChange"
    />
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
      currentPage: 1,
      pageSize: 3
    }
  },
  methods: {
    async getPageInfo() {
      let { currentPage, pageSize } = this
      let data = {
        pageSize,
        pageNum: currentPage - 1,
        data: {}
      }
      const res = await postPageReq(data)
      if (res.data.code !== 200) return
      let { list, count } = res.data.data
      this.list = list
      this.count = count
    },
    currentChange() {
      this.getPageInfo()
    }
  },
  created() {
    this.getPageInfo()
  }
}
</script>

<style>
</style>