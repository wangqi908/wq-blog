<template>
  <div class="post-view">
    <h3 class="title">{{title}}</h3>
    <div class="post-bar">
      <div>
        <span>时间</span>
        <span>{{createTime|allTimeFilter}}</span>
      </div>
      <div>
        <span>类型</span>
        <span>{{type|postTypeFilter}}</span>
      </div>
    </div>
    <div v-html="content" class="markdown-body"></div>
  </div>
</template>

<script>
import { postViewReq } from '@api'

export default {
  components: {},
  data() {
    return {
      content: '',
      createTime: '',
      title: '',
      type: ''
    }
  },
  methods: {
    async getInfo() {
      let _id = this.$route.params.id
      const res = await postViewReq({ _id })
      let { content, createTime, title, type } = res.data.data
      this.content = content
      this.createTime = createTime
      this.title = title
      this.type = type
    }
  },
  created() {
    this.getInfo()
  }
}
</script>

<style lang='scss' >
.post-view {
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  .title {
    margin-bottom: 10px;
  }
  .post-bar {
    display: flex;
    margin-bottom: 10px;
    div {
      margin-right: 20px;
      span {
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }
}

pre {
  display: block;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 1em;
  border-radius: 6px !important;
  box-shadow: $shadow;
}
</style>