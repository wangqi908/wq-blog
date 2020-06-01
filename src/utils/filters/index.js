import { formatTime } from '@/utils'

const filters = {
  HMSTimeFilter(val) {
    return formatTime(val, 'HMS')
  },
  YMDTimeFilter(val) {
    return formatTime(val, 'YMD')
  },
  allTimeFilter(val) {
    return formatTime(val, 'all')
  }
}

export default Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
