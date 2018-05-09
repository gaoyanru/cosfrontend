import { createAction } from 'redux-actions'
import { fetchGetmainitemList, fetchDataEditOrderItem } from '@/utils/api'

export const updateGetmainitemList = () => (dispatch) => {
  fetchGetmainitemList().then((res) => {
    if (res.status) {
      console.log(res)
    }
  })
}

export const updateOrderItem = (id) => (dispatch) => {
  fetchDataEditOrderItem(id).then((res) => {
    if (res.status) {
      console.log(res)
    }
  })
}
