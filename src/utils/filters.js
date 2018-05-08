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
export const fOrderSource = (status) => {
  var str = ''
  switch (+status) {
  case 1:
    str = '电销'
    break
  case 2:
    str = '天猫'
    break
  }
  return str
}
export const fAgentStatus = (status) => {
  var str = ''
  switch (+status) {
  case 1:
    str = '正常'
    break
  case 2:
    str = '挂起'
    break
  case 5:
    str = '建账中'
    break
  }
  return str
}
export const fOrderStatus = (status, sourceId) => {
  var str = ''
  switch (+status) {
  case 1:
    str = '审单待审核'
    break
  case 2:
    str = '审单已审核'
    break
  case 3:
    str = '审单驳回'
    break
  case 4:
    if (sourceId === 1) {
      str = '财务已审核'
    } else {
      str = '网店到款'
    }
    break
  case 5:
    str = '财务已驳回'
    break
  case 6:
    str = '财务确认'
    break
  case 7:
    str = '总经理审核'
    break
  case 8:
    str = '总经理驳回'
    break
  case 9:
    str = '已退款'
    break
  }
  return str
}
export const fServiceStatus = (status) => {
  var str = ''
  switch (+status) {
  case 1:
    str = '待分配'
    break
  case 2:
    str = '未开始'
    break
  case 3:
    str = '外勤服务'
    break
  case 4:
    str = '外勤会计服务'
    break
  case 5:
    str = '会计服务'
    break
  case 7:
    str = '结束'
    break
  case 8:
    str = '中止'
    break
  }
  return str
}
export const fCheckStatus = (status) => {
  var str = ''
  switch (+status) {
  case 0:
    str = '(空)'
    break
  case 1:
    str = '待审核'
    break
  case 2:
    str = '已审核'
    break
  case 3:
    str = '已驳回'
    break
  case 4:
    str = '外勤提交'
    break
  case 5:
    str = '部分确认'
    break
  case 6:
    str = '已提交'
    break
  case 7:
    str = '已结束'
    break
  case 8:
    str = '已中止'
    break
  }
  return str
}
export const fAccountantStatus = (status) => {
  var str = ''
  switch (+status) {
  case 0:
    str = '(空)'
    break
  case 1:
    str = '待审核'
    break
  case 2:
    str = '已审核'
    break
  case 3:
    str = '已驳回'
    break
  case 5:
    str = '部分审核'
    break
  }
  return str
}
