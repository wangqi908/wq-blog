<template>
  <div>
    <p>test</p>
    <MarkdownEditor v-model="value" />
    <p>{{value}}</p>
  </div>
</template>

<script>
import { MarkdownEditor } from '@c'
export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {}
}
</script>

<style>
</style>