<template>
  <div id="wangeditor">
    <div ref="editorElem" style="text-align:left;"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'Edit',
  data() {
    return {
      editor: null,
      menus: [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        'emoticon', // 表情
        'image', // 插入图片
        'table', // 表格
        'video', // 插入视频
        'code', // 插入代码
        'undo', // 撤销
        'redo' // 重复
      ],
      editorContent: ''
    }
  },
  mounted() {
    let editor = new E(this.$refs.editorElem)
    // 编辑器的事件，每次改变会获取其html内容
    editor.customConfig.onchange = html => {
      console.log(html)
    }

    editor.customConfig.menus = this.menus

    editor.customConfig.uploadImgShowBase64 = true

    editor.create() // 创建富文本实例
  }
}
</script>