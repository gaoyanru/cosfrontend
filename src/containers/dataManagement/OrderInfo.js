import React from 'react'
import styles from '@/stylus/modifydata'
import { Row, Col, Icon, Table } from 'antd'
import { fDate, fOrderStatus, fOrderSource, fServiceStatus, fCheckStatus, fAccountantStatus, fContractStatus } from '@/utils/filters'
class OrderInfo extends React.Component {
  render () {
    const data = [{
      OrderId: 8811,
      OrderNo: 122,
      Amount: 200,
      OrderSalesName: 'ddd',
      ContractDate: '2017-12-18T18:15:49',
      CreateDate: '2017-12-18T18:15:49',
      OrderSourceId: 1,
      OrderStatus: 4,
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
      }]
    }]
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
          data.map((item, index) => {
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
                    <span>{item.OrderSalesName}</span>
                  </Col>
                  <Col span={5}>
                    <label>签单日期：</label>
                    <span>{fDate(item.ContractDate)}</span>
                  </Col>
                  <Col span={4}>
                    <Icon className={styles['icon-size']} type="delete" />
                    <Icon className={styles['icon-size']} type="edit" />
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
                    <span>{fOrderStatus(item.OrderStatus, item.OrderSourceId)}</span>
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
