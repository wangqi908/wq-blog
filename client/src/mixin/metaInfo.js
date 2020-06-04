export default {
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        {
          name: 'keywords',
          content: this.meta.keywords
        },
        {
          name: 'description',
          content: this.meta.description
        }
      ]
    }
  },
  data() {
    return {
      meta: {
        title: '',
        description: '',
        keywords: ''
      }
    }
  }
}
