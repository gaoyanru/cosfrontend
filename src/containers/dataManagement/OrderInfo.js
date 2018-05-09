import { Row, Col, Icon, Table, Form, Select, Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import styles from '@/stylus/modifydata'
import Modal from '@/components/common/Modal'
import ContractModify from '@/containers/dataManagement/ContractModify'
import { fDate, fOrderStatus, fOrderSource, fServiceStatus, fCheckStatus, fAccountantStatus, fContractStatus } from '@/utils/filters'
import { updateGetmainitemList, updateOrderList } from '@/actions/dataedit'
import { fetchSalesList } from '@/utils/api'
const FormItem = Form.Item
const Option = Select.Option

class OrderInfo extends React.Component {
  componentWillMount () {
    this.props.dispatch(updateGetmainitemList())
    this.props.dispatch(updateOrderList(this.props.Id))
  }
  editOrder (item, index) {
    console.log(item, 'item')
    const modal = Modal.show({
      content: (
        <ContractModify
          data ={item}
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
    const { orderList } = this.props
    const columns = [{
      title: '合同编号',
      dataIndex: 'ContractNo'
    }, {
      title: '项目',
      dataIndex: 'MainItemName'
    }, {
      title: '子项目',
      dataIndex: 'ChildItemName'
    }, {
      title: '费用',
      dataIndex: 'Amount'
    }, {
      title: '服务期限',
      dataIndex: 'OrderMonths'
    }, {
      title: '开始服务时间',
      dataIndex: 'ServiceStart',
      render: val => fDate(val)
    }, {
      title: '合同状态',
      dataIndex: 'Status',
      render: (val, row) => fContractStatus(val)
    }, {
      title: '服务状态',
      dataIndex: 'ServiceStatus',
      render: val => fServiceStatus(val)
    }, {
      title: '任务单号',
      dataIndex: 'taskId'
    }, {
      title: '分配对象',
      dataIndex: 'person'
    }, {
      title: '外勤状态',
      dataIndex: 'OutWorkerStatus',
      render: val => fCheckStatus(val)
    }, {
      title: '会计状态',
      dataIndex: 'AccountantStatus',
      render: val => fAccountantStatus(val)
    }]
    console.log(orderList, 'orderList')
    return (
      <div>
        {
          orderList.map((item, index) => {
            return (
              <div key={item.OrderId} style={{ marginBottom: '30px' }}>
                <Row>
                  <Col span={5}>
                    <label>订单号：</label>
                    <span>{item.OrderNo}</span>
                  </Col>
                  <Col span={5}>
                    <label>订单总额：</label>
                    <span>{item.Amount}</span>
                  </Col>
                  <Col span={5}>
                    <label>签单销售：</label>
                    <span>{item.OrderSalesName}</span>
                  </Col>
                  <Col span={5}>
                    <label>签单日期：</label>
                    <span>{fDate(item.ContractDate)}</span>
                  </Col>
                  <Col span={4}>
                    <Icon className={styles['icon-size']} type="delete" />
                    <Icon className={styles['icon-size']} type="edit" onClick={e => this.editOrder(item, index)}/>
                  </Col>
                </Row>
                <Row>
                  <Col span={5}>
                    <label>创建日期：</label>
                    <span>{fDate(item.CreateDate)}</span>
                  </Col>
                  <Col span={5}>
                    <label>来源：</label>
                    <span>{fOrderSource(item.OrderSourceId)}</span>
                  </Col>
                  <Col span={5}>
                    <label>订单状态：</label>
                    <Select defaultValue={'' + item.OrderStatus} style={{ width: 150 }}>
                      <Option key='1' value='1'>审单待审核</Option>
                      <Option key='2' value='2'>审单已审核</Option>
                      <Option key='3' value='3'>审单驳回</Option>
                      <Option key='4' value='4'>财务已审核/网店到款</Option>
                      <Option key='5' value='5'>财务已驳回</Option>
                      <Option key='6' value='6'>财务确认</Option>
                    </Select>
                  </Col>
                </Row>
                <Table
                  rowKey={record => record.OrderItemId}
                  dataSource={
                    item.CrmOrderItems.length === 1 && item.CrmOrderItems[0] === null
                      ? [] : item.CrmOrderItems || []
                  }
                  columns={columns}
                  pagination={false}
                />
              </div>
            )
          })
        }
        <div style={{ textAlign: 'center' }}>
          <Button type="primary">保存</Button>
        </div>
      </div>
    )
  }
}
export default connect(({dataedit}) => {
  return {
    ...dataedit
  }
})(OrderInfo)
