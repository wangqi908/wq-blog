// 详情
const PostSchema = require('../../db/models').PostSchema
const ipWithPort = require('../../utils/getIp.js').ipWithPort

var marked = require('marked')
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  },
  gfm: true, //允许 Git Hub标准的markdown.
  tables: true, //允许支持表格语法。该选项要求 gfm 为true。
  // breaks: false,//允许回车换行。该选项要求 gfm 为true。
  pedantic: false, //尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  smartLists: true, //使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
  smartypants: false //使用更为时髦的标点，比如在引用语法中加入破折号。
})

const filter = { __v: 0 }
const view = (req, res) => {
  let { _id, isMd } = req.body
  PostSchema.findOne({ _id }, filter, async (err, info) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    if (!info) {
      res.send({ code: 0, msg: '未找到' })
      return
    }
    let data = JSON.parse(JSON.stringify(info))
    data.http = ipWithPort

    if (!isMd) data.content = marked(data.content)

    res.send({ code: 200, data })
  })
}

module.exports = {
  view
}
