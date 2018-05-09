import React from 'react'
import { connect } from 'react-redux'
import Modal from '@/components/common/Modal'
import ContractModify from '@/containers/dataManagement/ContractModify'
import { updateGetmainitemList, updateOrderList, updateOrderItem } from '@/actions/dataedit'
class Demo1 extends React.Component {
  componentWillMount () {
    this.props.dispatch(updateGetmainitemList())
<<<<<<< HEAD
=======
    this.props.dispatch(updateOrderItem(289020))
>>>>>>> 0664b7633ede821946407c5b29e64a5d1a9fa7f1
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
export default connect(({dataedit}) => {
  return {
    ...dataedit
  }
})(Demo1)
