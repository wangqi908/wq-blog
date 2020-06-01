<template>
  <Editor
    :options="editorOptions"
    @change="onEditorChange"
    :initialValue="value"
    ref="toastuiEditor"
  />
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/vue-editor'
export default {
  name: 'MarkdownEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    Editor
  },
  data() {
    return {
      editorText: '',
      editorOptions: {}
    }
  },
  methods: {
    onEditorChange() {
      let markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      this.$emit('input', JSON.stringify(markdown))
    },
    getHtml() {
      let html = this.$refs.toastuiEditor.invoke('getHtml')
      console.log(html)
    }
  },
  mounted() {
    console.log(this.value)
  }
}
</script>

<style>
</style>