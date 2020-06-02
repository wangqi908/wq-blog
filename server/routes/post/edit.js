// 编辑
const PostSchema = require('../../db/models').PostSchema
const unlinkFile = require('../../utils/unlinkFile').unlinkFile
const remove = require('../../utils/remove').remove //保存到永久文件夹

const edit = (req, res) => {
  let { _id } = req.body
  // 先找到id对应的目标,拿到图片路径以便删除
  PostSchema.find({ _id }, async (err, doc) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    if (!doc.length) {
      res.send({ code: 0, msg: '未找到' })
      return
    }
    let postInfo = doc[0]
    let newInfo = JSON.parse(JSON.stringify(req.body))

    let banner = newInfo.banner

    let isChange = banner.split('/')[0] !== 'files' //是否需要更换图片

    console.log(isChange, banner.split('/')[0])
    // 如果之前有图片,且需要更换图片 先删除之前的图片 然后更换图片新路径
    if (banner && postInfo.banner && isChange) {
      unlinkFile(postInfo.banner)
    }
    //图片新路径
    if (newInfo.banner && isChange) {
      const newBannerPath = await remove(newInfo.banner)
      newInfo.banner = newBannerPath
    }

    PostSchema.updateOne({ _id }, newInfo, (err, doc) => {
      if (err) {
        res.send({ code: 0, data: err })
        return
      }
      res.send({ code: 200, data: doc })
    })
  })
}

module.exports = {
  edit
}
