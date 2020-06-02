// 移除
const PostSchema = require('../../db/models').PostSchema
const unlinkFile = require('../../utils/unlinkFile').unlinkFile

const remove = (req, res) => {
  let { ids } = req.body
  let idArr = { $in: ids }
  PostSchema.find({ _id: idArr }, async (err, doc) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    doc.forEach(ele => {
      let banner = ele.banner
      if (banner && banner !== '') {
        unlinkFile(banner)
      }
    })
    PostSchema.deleteMany({ _id: idArr }, (err, doc) => {
      if (err) {
        res.send({ code: 0, data: err })
        return
      }
      res.send({ code: 200, data: doc })
    })
  })
}

module.exports = {
  remove
}
