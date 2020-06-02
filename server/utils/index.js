const filter = { __v: 0 } // 查询时过滤出指定的属性

// 权限list转成tree
const filterArray = (data, p_id) => {
  let tree = []
  let temp

  for (let i = 0; i < data.length; i++) {
    if (data[i].p_id == p_id) {
      let obj = data[i]
      temp = filterArray(data, data[i]._id)
      if (temp.length > 0) {
        obj.children = temp
      }
      tree.push(obj)
    }
  }
  return tree
}

const uniqueArr = (arr, id = '_id') => {
  if (arr.length === 0) return []
  return arr.reduce((prev, cur) => {
    let hasId = prev.some(ele => {
      return ele[id] + '' === cur[id] + ''
    })
    return hasId ? prev : [...prev, cur]
  }, [])
}
module.exports = {
  filterArray,
  uniqueArr
}
