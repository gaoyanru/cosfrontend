import { createAction } from 'redux-actions'
import { fetchWechatUserInfo } from '@/utils/api'
// 获取微信用户信息
export const fetchWechatUserInfoAction = (cb) => (dispatch) => {
  fetchWechatUserInfo().then((res) => {
    if (res) {
      dispatch(createAction('update wechat user info')(res))
    }
    if (cb) {
      cb(res)
    }
  }, () => {
    if (cb) {
      cb(null)
    }
  })
}
