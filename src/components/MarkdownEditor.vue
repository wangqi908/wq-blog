<template>
  <Editor
    :options="editorOptions"
    @change="onEditorChange"
    :initialValue="value"
    height="600px"
    ref="toastuiEditor"
  />
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn.js'

import { Editor } from '@toast-ui/vue-editor'
export default {
  name: 'MarkdownEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    editorOptions: {
      type: Object,
      default: () => ({
        language: 'zh-CN',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: true,
        hideModeSwitch: false,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
      })
    }
  },
  components: {
    Editor
  },
  methods: {
    onEditorChange() {
      let markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      this.$emit('input', JSON.stringify(markdown))
    }
  }
}
</script>
