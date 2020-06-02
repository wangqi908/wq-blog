<template>
  <div class="pagination">
    <ul class="page-btn-box">
      <li
        @click="prevOrNext(-1)"
        :class="['option-btn btn-common',currentPage===1?'disabled':'']"
      >上一页</li>
      <li
        v-for="(item, index) in pages"
        :key="index"
        :class="['num-btn','btn-common',item === currentPage?'active':'',item==='...'?'li-box':'']"
        @click="select(item)"
      >{{item}}</li>
      <li class="current li-box">{{currentPage}}</li>
      <li
        @click="prevOrNext(1)"
        :class="['option-btn btn-common',currentPage===totalPages?'disabled':'']"
      >下一页</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 22
    }
  },
  methods: {
    select(item) {
      this.currentPage = item
    },
    prevOrNext(n) {
      this.currentPage += n

      this.currentPage < 1
        ? (this.currentPage = 1)
        : this.currentPage > this.totalPages
        ? (this.currentPage = this.totalPages)
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
    pages() {
      const c = this.currentPage

      const t = this.totalPages
      if (t <= 6) {
        let arr = []
        for (let index = 0; index < t; index++) {
          arr.push(index + 1)
        }
        return arr
      } else if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, '...', t] //第一种情况
      } else if (c >= t - 4) {
        return [1, '...', t - 5, t - 4, t - 3, t - 2, t - 1, t] //第二种情况
      } else {
        return [1, '...', c - 2, c - 1, c, c + 1, c + 2, '...', t] //第三种情况
      }
    }
  }
}
</script>

<style lang='scss'>
@import './style.scss';
</style>