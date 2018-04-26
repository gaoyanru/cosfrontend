import { notification, loading } from 'pilipa'
import store from '@/stores'

$(document).ajaxStart((event, request, settings) => {
  // console.log('ajaxStart', event, request, settings, 'ajaxStart')
})
$(document).ajaxSend((event, request, settings) => {
  const { ajaxCount } = store.getState().common
  if (ajaxCount === 0) {
    loading.show()
  }
  store.dispatch({type: 'loading show'})
  // console.log('ajaxSend', event, request, settings)
})
$(document).ajaxStop((a, b, c) => {
  // console.log('ajaxStop', a, b, c)
})
$(document).ajaxComplete((a, b, c) => {
  store.dispatch({type: 'loading hidden'})
  const { ajaxCount } = store.getState().common
  if (ajaxCount === 0) {
    loading.hide()
  }
})
$(document).ajaxError((event, response, settings) => {
  let msgConf = null
  console.log(event, response, 'error')
  let responseJSON = response.responseJSON
  switch (response.statusText) {
  case 'Unauthorized':
    break
  case 'timeout':
    msgConf = {
      title: '请求出错',
      message: '网络连接超时，请检查网络是否正常！'
    }
    break
  case 'Internal Server Error':
    msgConf = {
      title: '请求出错',
      message: '请求服务器异常！'
    }
    break
  default:
    if (responseJSON instanceof Object) {
      msgConf = {
        title: '请求出错',
        message: response.responseJSON.message
      }
    } else {
      msgConf = {
        title: '请求出错',
        message: '原因未知'
      }
    }
    break
  }
  if (msgConf) {
    notification.error(msgConf)
  }
})

const http = (url, type, config = {}) => {
  if (typeof type === 'object') {
    config = type
    type = config.type || 'GET'
    delete (config.type)
  } else {
    type = type || 'GET'
  }
  type = type.toUpperCase()
  const extension = config.extension || {}
  config.headers = Object.assign(config.headers || {}, {
    Authorize: sessionStorage.getItem('token')
  })
  const headers = config.headers || undefined
  delete config.extension
  delete config.headers
  const data = config.data || config || {}
  console.log(data, 'data')
  let ajaxConfig = {
    url: url,
    method: type,
    headers: headers,
    contentType: config.contentType || 'application/json; charset=utf-8',
    data: data,
    timeout: 10000
  }
  if (extension) {
    ajaxConfig = $.extend(true, ajaxConfig, extension)
  }
  switch (type) {
  case 'POST':
    ajaxConfig.processData = config.processData || false
    ajaxConfig.data = config.raw ? data : JSON.stringify(data)
    break
  case 'PUT':
    ajaxConfig.processData = false
    ajaxConfig.data = JSON.stringify(data)
    break
  case 'DELETE':
    ajaxConfig.processData = false
    ajaxConfig.data = JSON.stringify(data)
    break
  }
  return $.ajax(ajaxConfig).then((res) => {
    var result = {}
    if (typeof res === 'string') {
      try {
        result = JSON.parse(res)
      } catch (e) {
        result = res
      }
    } else {
      result = res
    }
    if (res.status === false) {
      notification.warning({
        message: res.message
      })
    }
    return result
  }, (err) => {
    return err
  })
}

export default http
