// 时间戳格式化
export const formatTime = (date, type) => {
  if (!date || date === '') return ''
  date = new Date(date * 1) //如果date为13位不需要乘1000

  const year = date.getFullYear()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  if (type === 'all') {
    let res = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    return res
  } else if (type === 'YMD') {
    let res = `${year}/${month}/${day}`
    return res
  } else if (type === 'HMS') {
    let res = `${hours}:${minutes}:${seconds}`
    return res
  } else {
    return { year, month, day, hours, minutes, seconds }
  }
}

// 数组交集
export const intersection = (arr1, arr2) => {
  return arr1.filter(v => arr2.includes(v.name))
}

// 防抖
export const debounce = (fn, wait) => {
  let timeout = null
  return () => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

// 节流
export const throttle = (fn, wait) => {
  let prov = Date.now()
  return () => {
    let now = Date.now()
    if (now - prov > wait) {
      fn()
      prov = Date.now()
    }
  }
}

// 深拷贝
export const deepCopy = obj => {
  const target = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    const element = obj[key]
    target[key] = typeof element === 'object' ? deepCopy(element) : element
  }
  return target
}

// 数组对象根据id去重
export const uniqueArr = (arr, id = 'id') => {
  if (arr.length === 0) return []
  return arr.reduce((prev, cur) => {
    let hasId = prev.some(ele => ele[id] === cur[id])
    return hasId ? prev : [...prev, cur]
  }, [])
}
