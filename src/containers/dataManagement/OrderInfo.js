import React from 'react'
import styles from '@/stylus/modifydata'
import Modal from '@/components/common/Modal'
import ContractModify from '@/containers/dataManagement/ContractModify'
import { Row, Col, Icon, Table, Form, Select } from 'antd'
import { fDate, fOrderStatus, fOrderSource, fServiceStatus, fCheckStatus, fAccountantStatus, fContractStatus } from '@/utils/filters'
const FormItem = Form.Item
const Option = Select.Option

class OrderInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      salerList: [{
        Id: 196,
        RealName: '于洋'
      }, {
        Id: 197,
        RealName: 'da洋'
      }]
    }
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
    const data = {
      CustomerStatusInAgent: null,
      CustomerId: 289020,
      CompanyName: '1218TEST',
      SubsidiaryId: 11,
      SubsidiaryName: '北京爱康鼎',
      CityCode: 110100,
      Connector: 'test',
      Mobile: 13122223339,
      SalesId: 394,
      SalesName: null,
      AgentStatus: 2,
      AddedValue: 2,
      Orders: [{
        OrderId: 8811,
        OrderNo: 122,
        Amount: 200,
        OrderSalesName: 'ddd',
        ContractDate: '2017-12-18T18:15:49',
        CreateDate: '2017-12-18T18:15:49',
        OrderSourceId: 1,
        OrderStatus: 4,
        OrderSalesId: 196,
        CrmOrderItems: [{
          OrderItemId: 141842,
          OrderId: 8811,
          MainItemId: 2,
          MainItemName: '财务服务费',
          ChildItemId: 4,
          ChildItemName: '税务其他',
          Amount: 100,
          ContractNo: '1218TEST-b',
          OrderMonths: null,
          GiftMonths: null,
          ServiceStart: null,
          ServiceEnd: null,
          Status: 1,
          ServiceStatus: 2,
          taskId: 111,
          person: 'dada',
          OutWorkerStatus: 1,
          AccountantStatus: 1
        }],
        PayInfoList: [{
          Id: 1779,
          OrderId: 8811,
          OrderSourceId: 1,
          OrderSourceText: '电销',
          PayTypeId: 1,
          PayTypeText: '现金',
          PayAccountNo: 34243424243344343,
          PayTime: '2017-11-27T00:00:00',
          PayImagePath: 'https://pilipa.oss-cn-beijing.aliyuncs.com/FileUploads/pay/201712/T7J7Ey63i5.jpg',
          Status: 1,
          Remark: null
        }]
      }]
    }
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
    return (
      <div>
        {
          data.Orders.map((item, index) => {
            return (
              <div key={item.OrderId}>
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
                    <Select defaultValue={item.OrderSalesId} style={{ width: 150 }}>
                      {this.state.salerList.map(item => {
                        return <Option key={item.Id} value={item.Id}>{item.RealName}</Option>
                      })}
                    </Select>
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
                  dataSource={item.CrmOrderItems}
                  columns={columns}
                  pagination={false}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default OrderInfo
