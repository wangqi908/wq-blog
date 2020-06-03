<template>
  <div class="pagination">
    <ul class="page-btn-box">
      <li
        @click="prevOrNext(-1)"
        :class="['option-btn btn-common',myCurrentPage===1?'disabled':'']"
      >上一页</li>
      <li
        v-for="(item, index) in pages"
        :key="index"
        :class="['num-btn','btn-common',item === myCurrentPage?'active':'',item==='...'?'li-box':'']"
        @click="select(item)"
      >{{item}}</li>
      <li class="current li-box">{{myCurrentPage}}</li>
      <li
        @click="prevOrNext(1)"
        :class="['option-btn btn-common',myCurrentPage===totalPages?'disabled':'']"
      >下一页</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: [String, Number],
      required: true
    },
    pageSize: {
      type: [String, Number],
      required: true
    },
    currentPage: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      myCurrentPage: this.currentPage
    }
  },
  methods: {
    select(item) {
      this.myCurrentPage = item
    },
    prevOrNext(n) {
      this.myCurrentPage += n

      this.myCurrentPage < 1
        ? (this.myCurrentPage = 1)
        : this.myCurrentPage > this.totalPages
        ? (this.myCurrentPage = this.totalPages)
        : null
    },
    change(type) {
      let { active, totle } = this
      if (type === 'prev') {
        if (active === 1) return
        this.active--
      }
      if (type === 'next') {
        if (active === totle) return
        this.active++
      }
      if (typeof type === 'number') {
        this.active = type
      }
    }
  },
  computed: {
    totalPages() {
      let { total, pageSize } = this
      return Math.ceil(total / pageSize)
    },
    pages() {
      const c = this.myCurrentPage

      const t = this.totalPages
      if (t <= 4) {
        let arr = []
        for (let index = 0; index < t; index++) {
          arr.push(index + 1)
        }
        return arr
      } else if (c <= 4) {
        return [1, 2, 3, 4, '...', t] //第一种情况
      } else if (c >= t - 4) {
        return [1, '...', t - 5, t - 4, t - 3, t - 2, t - 1, t] //第二种情况
      } else {
        return [1, '...', c - 2, c - 1, c, c + 1, c + 2, '...', t] //第三种情况
      }
    }
  },
  watch: {
    myCurrentPage(val) {
      this.$emit('update:currentPage', val)
      this.$emit('current-change', val)
    }
  }
}
</script>

<style lang='scss'>
@import './style.scss';
</style>