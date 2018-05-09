import React from 'react'
import { connect } from 'react-redux'
import Modal from '@/components/common/Modal'
import ContractModify from '@/containers/dataManagement/ContractModify'
import { updateGetmainitemList, updateOrderItem } from '@/actions/dataedit'
class Demo1 extends React.Component {
  componentWillMount () {
    this.props.dispatch(updateGetmainitemList())
    this.props.dispatch(updateOrderItem(101553008))
  }
  componentDidMount () {
    const modal = Modal.show({
      content: (
        <ContractModify
          data={{}}
        />
      ),
      title: '修改订单',
      mask: true,
      width: 1000,
      okText: '保存',
      cancelText: '',
      onOk: () => {
        modal.hide()
      },
      onCancel: () => {
        modal.hide()
      }
    })
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}
export default connect((state) => {
  return state
})(Demo1)
