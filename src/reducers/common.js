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
  }
}, {
  ajaxCount: 0
})
