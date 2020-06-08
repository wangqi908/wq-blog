<template>
  <el-select v-model="myValue" placeholder="请选择种类">
    <el-option v-for="item in list" :key="item.value" :label="item.title" :value="item.value"></el-option>
  </el-select>
</template>

<script>
import { getPostTypeArr } from '@u/dict'
export default {
  model: {
    prop: 'id',
    event: 'change'
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      myValue: this.id,
      list: []
    }
  },
  created() {
    this.list = getPostTypeArr()
  },
  watch: {
    id(val) {
      this.myValue = val
    },
    myValue(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style>
</style>