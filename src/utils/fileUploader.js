import { moment } from 'antd'
import http from '@/utils/http'
import { getSignkey } from '@/utils/api'

function buildKey (fileName) {
  const getSuffix = function (filename) {
    let suffix = ''
    const pos = filename.lastIndexOf('.')

    if (pos !== -1) {
      suffix = filename.substring(pos)
    }
    return suffix
  }
  const randomString = function (len) {
    len = len || 32
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const maxPos = chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  }

  const suffix = getSuffix(fileName)
  const typMap = 'FileUploads/ERP/'
  const nowstr = moment().format('YYYYMM')
  const gObjectName = typMap + nowstr + '/' + randomString(10) + suffix
  return gObjectName
}
const origin = 'https://pilipa.oss-cn-beijing.aliyuncs.com/'
const uploader = (file) => {
  getSignkey().then(res => {
    if (res.status) {
      const data = res.data
      delete data.Filename
      delete data.key
      delete data.callback
      delete data.expire
      delete data.Host
      data.key = buildKey(file.name)
      const filename = origin + data.key
      return http(origin, 'POST', data)
    }
  })
}
export default uploader
