import { handleActions } from 'redux-actions'
import storage from '../utils/storage'
export default handleActions({
  'loading show': (state) => {
    return {
      ...state,
      ajaxCount: state.ajaxCount + 1
    }
  },
  'loading hidden': (state) => {
    return {
      ...state,
      ajaxCount: state.ajaxCount - 1
    }
  },
  'change login status': (state, { payload }) => {
    return {
      ...state,
      loginStat: payload.loginStat // in or out
    }
  }
}, {
  ajaxCount: 0,
  loginStat: sessionStorage.getItem('token') ? 'in' : 'out'
})
