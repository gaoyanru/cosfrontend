import { handleActions } from 'redux-actions'
export default handleActions({
  'update data edit order item': (state, { payload }) => {
    return {
      ...state,
      orderItem: payload
    }
  },
  'update data edit order list': (state, { payload }) => {
    return {
      ...state,
      orderList: payload
    }
  }
}, {
  orderItem: {},
  orderList: []
})
