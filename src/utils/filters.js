export const fOrganization = (val) => {
  var str = ''
  switch (+val) {
  case 1:
    str = '直营'
    break
  case 2:
    str = '渠道'
    break
  }
  return str
}
export const fAddedValue = (val) => {
  var str = ''
  switch (+val) {
  case 1:
    str = '小规模'
    break
  case 2:
    str = '一般纳税人'
    break
  }
  return str
}
export const fInfoSource = (val) => {
  var str = ''
  switch (+val) {
  case 0:
    str = '其他'
    break
  case 1:
    str = '天眼查'
    break
  case 2:
    str = '国家信息公示网'
    break
  case 3:
    str = '特殊公司'
    break
  }
  return str
}
// 日期类
export const fDate = (val) => {
  if ((!val) || val.length < 10 || val.substr(0, 4) === '0001') return ''
  return val.substr(0, 10)
}
export const fDateT = (val) => {
  if ((!val) || val.length < 10 || val.substr(0, 4) === '0001') return ''
  return val.substr(0, 19).replace('T', ' ')
}
export const fMonth = (val) => {
  if ((!val) || val.length < 10 || val.substr(0, 4) === '0001') return ''
  return val.substr(0, 7)
}
export const fMainTaskStatus = (val) => {
  var str = ''
  switch (+val) {
  case 1:
    str = '待分配'
    break
  case 2:
    str = '待处理'
    break
  case 3:
    str = '进行中'
    break
  case 4:
    str = '已完成'
    break
  case 5:
    str = '已取消'
    break
  }
  return str
}
export const fSubTaskStatus = (val) => {
  var str = ''
  switch (+val) {
  case 1:
    str = '待分配'
    break
  case 2:
    str = '待处理'
    break
  case 3:
    str = '进行中'
    break
  case 4:
    str = '已取消'
    break
  case 5:
    str = '已完成'
    break
  }
  return str
}
export const fOutworkStatus = (val) => {
  var str = ''
  switch (+val) {
  case 1:
    str = '启用'
    break
  case 2:
    str = '停用'
    break
  }
  return str
}
export const fContractStatus = (val) => {
  var str = ''
  switch (+val) {
  case 1:
    str = '正常'
    break
  case 2:
    str = '结束'
    break
  case 3:
    str = '正常中止'
    break
  case 4:
    str = '作废中止'
    break
  case 5:
    str = '变更中止'
    break
  }
  return str
}
