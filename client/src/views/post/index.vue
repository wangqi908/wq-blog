<template>
  <PostList />
</template>

<script>
import metaInfo from '@/mixin/metaInfo'
import { PostList } from '@c'
export default {
  name: 'post',
  mixins: [metaInfo],
  components: { PostList },
  data() {
    return {
      num: 0
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setInterval(() => {
        this.meta.title = '王琦的博客-文章'
        this.meta.description = '王琦的博客-文章'
        this.meta.keywords = '王琦的博客-文章'
      }, 100)
    }
  }
}
</script>
