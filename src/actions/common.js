import { createAction } from 'redux-actions'
import { fetchWechatUserInfo } from '@/utils/api'
// 获取用户信息
export const fetcUserInfoAction = (cb) => (dispatch) => {
  let userInfo = ''
  try {
    userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  } catch (e) {
    console.log(e)
  }
  dispatch(createAction('update common user info')(userInfo))
  if (cb) {
    cb(userInfo)
  }
}

export const changeLoginStat = (stat) => (dispatch) => {
  dispatch(createAction('change login status')(stat))
}
