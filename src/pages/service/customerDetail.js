import React from 'react'
import { Tabs, Table, Button } from 'antd'
import { fDate, fMainTaskStatus, fSubTaskStatus, fOutworkStatus, fContractStatus } from '@/utils/filters'
import styles from '@/stylus/serviceCard'
import CusDetail1 from '@/containers/service/cusDetail1'
import Modal from '@/components/common/modal'
const TabPane = Tabs.TabPane
export default class CustomerDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curKey: '1'
    }
    this.callback = this.callback.bind(this)
    this.viewOrder = this.viewOrder.bind(this)
    this.viewChildTask = this.viewChildTask.bind(this)
    this.back = this.back.bind(this)
  }
  callback (key) {
    console.log(key)
    this.setState({
      curKey: key
    })
  }
  back () {
    console.log(this.props, 'this.props')
    this.props.history.go(-1)
  }
  viewOrder (record) {
    const OrderModalData = [
      { ContractNo: 22354645646, MainItemName: '记账报税', ChildItemName: '一般纳税人', Amount: 22, ReceiveAmount: 33, RefundAmount: 33, Status: 1, Remark: 'eee ' },
      { ContractNo: 22354645647, MainItemName: '记账报税', ChildItemName: '一般纳税人', Amount: 22, ReceiveAmount: 33, RefundAmount: 33, Status: 1, Remark: 'eee ' },
      { ContractNo: 22354645648, MainItemName: '记账报税', ChildItemName: '一般纳税人', Amount: 22, ReceiveAmount: 33, RefundAmount: 33, Status: 1, Remark: 'eee ' }
    ]
    const orderModalcolumns = [{
      title: '合同ID',
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
      title: '领用金额',
      dataIndex: 'ReceiveAmount'
    }, {
      title: '退费金额',
      dataIndex: 'RefundAmount'
    }, {
      title: '合同状态',
      dataIndex: 'Status',
      render: val => fContractStatus(val)
    }, {
      title: '备注',
      dataIndex: 'Remark'
    }]
    const modal = Modal.show({
      content: (
        <Table
          rowKey={record => (record.ContractNo)}
          dataSource={OrderModalData}
          columns={orderModalcolumns}
          pagination={false}
        />
      ),
      title: '合同详情',
      mask: true,
      width: 800,
      okText: '',
      cancelText: '',
      footer: null,
      onCancel: () => {
        modal.hide()
      }
    })
  }
  viewChildTask (record) {
    const ChildTaskData = [
      { ContractNo: 222, TaskName: '银行缴纳罚款', OutWorkerName: '你哈是', StartTime: '2018-04-23T16:43:29', EndTime: '2018-04-23T16:43:29', Status: 1 },
      { ContractNo: 223, TaskName: '银行缴纳罚款', OutWorkerName: '你哈是', StartTime: '2018-04-23T16:43:29', EndTime: '2018-04-23T16:43:29', Status: 1 },
      { ContractNo: 224, TaskName: '银行缴纳罚款', OutWorkerName: '你哈是', StartTime: '2018-04-23T16:43:29', EndTime: '2018-04-23T16:43:29', Status: 1 }
    ]
    const ChildTaskcolumns = [{
      title: '合同ID',
      dataIndex: 'ContractNo'
    }, {
      title: '子任务名称',
      dataIndex: 'TaskName'
    }, {
      title: '当前外勤人员',
      dataIndex: 'OutWorkerName'
    }, {
      title: '开始时间',
      dataIndex: 'StartTime',
      render: val => fDate(val)
    }, {
      title: '完成时间',
      dataIndex: 'EndTime',
      render: val => fDate(val)
    }, {
      title: '状态',
      dataIndex: 'Status',
      render: val => fOutworkStatus(val)
    }]
    const modal = Modal.show({
      content: (
        <Table
          rowKey={record => (record.ContractNo)}
          dataSource={ChildTaskData}
          columns={ChildTaskcolumns}
          pagination={false}
        />
      ),
      title: '子任务',
      mask: true,
      width: 800,
      okText: '',
      cancelText: '',
      footer: null,
      onCancel: () => {
        modal.hide()
      }
    })
  }
  render () {
    const tabData1 = {
      CompanyName: '北京爱康鼎科技有限公司',
      CityName: '北京市',
      Contactor: '俞东浩',
      Mobile: '13386143761',
      SalesName: '何吉敏',
      Category: 1,
      serviceStartDate: '2015-08-20T00:00:00',
      AccountantName: 'bubu',
      InfoSource: 0,
      RegNO: '911101053552537441',
      LegalPerson: '法人名',
      RegisterDate: '2015-08-20T00:00:00',
      PersonCardID: '65566566667767676',
      Address: '贵州省贵阳市云岩区浣沙路１号',
      RegisteredCapital: '100000万',
      BusnissDeadline: '2035-08-19T00:00:00',
      BusinessScope: '餐饮管理；企业管理咨询；经济贸易咨询；组织文化艺术交流活动（不含演出）；技术推广服务；销售日用品。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）'
    }
    const tabData4 = {
      businessStatus: '处理中',
      businessDate: '2017-02-28',
      orders: [{
        startDate: '2017-02-28',
        endDate: '2018-04-30'
      }],
      accountUserName: '核算',
      businessUserName: '主办'
    }
    const columns1 = [{
      title: '订单ID',
      dataIndex: 'OrderId'
    }, {
      title: '订单来源',
      dataIndex: 'SourceName'
    }, {
      title: '订单总金额',
      dataIndex: 'Amount'
    }, {
      title: '记账报税费用',
      dataIndex: 'AgentFeed'
    }, {
      title: '外勤服务费用',
      dataIndex: 'OutWorkServiceFeed'
    }, {
      title: '代收费用',
      dataIndex: 'BookKeepFeed'
    }, {
      title: '签单销售',
      dataIndex: 'OrderSalesName'
    }, {
      title: '签定日期',
      dataIndex: 'ContractDate',
      render: val => fDate(val)
    }, {
      title: '备注',
      dataIndex: 'Remark'
    }, {
      title: '操作',
      render: (text, record) => {
        return (
          <span>
            <a onClick={e => { this.viewOrder(record) }}>合同</a>
          </span>
        )
      }
    }]
    const columns2 = [{
      title: '任务ID',
      dataIndex: 'Id'
    }, {
      title: '任务名称',
      dataIndex: 'MainTaskName'
    }, {
      title: '当前子任务',
      dataIndex: 'childTaskName'
    }, {
      title: '主任务状态',
      dataIndex: 'MainTaskStatus',
      render: val => fMainTaskStatus(val)
    }, {
      title: '当前子任务状态',
      dataIndex: 'OutWorkerStatus',
      render: val => fSubTaskStatus(val)
    }, {
      title: '任务提交时间',
      dataIndex: 'SubmitTaskTime',
      render: val => fDate(val)
    }, {
      title: '操作',
      render: (text, record) => {
        return (
          <span>
            <a onClick={e => { this.viewChildTask(record) }}>子任务</a>
          </span>
        )
      }
    }]
    const tabData2 = [
      { OrderId: 12219, SourceName: '电销', Amount: 888, AgentFeed: 222, OutWorkServiceFeed: 222, BookKeepFeed: 333, OrderSalesName: '大百搭', ContractDate: '2018-05-01T00:00:00', Remark: '大大大大大大大大大所大所' },
      { OrderId: 12220, SourceName: '电销', Amount: 888, AgentFeed: 222, OutWorkServiceFeed: 222, BookKeepFeed: 333, OrderSalesName: '大百搭', ContractDate: '2018-05-01T00:00:00', Remark: 'ssssssss' },
      { OrderId: 12221, SourceName: '电销', Amount: 888, AgentFeed: 222, OutWorkServiceFeed: 222, BookKeepFeed: 333, OrderSalesName: '大百搭', ContractDate: '2018-05-01T00:00:00', Remark: 'ssssssss' }
    ]
    const tabData3 = [
      { Id: 3692, MainTaskName: '通办测试1', childTaskName: '银行缴纳罚款', MainTaskStatus: 1, OutWorkerStatus: 2, SubmitTaskTime: '2018-04-23T16:43:29' },
      { Id: 3693, MainTaskName: '通办测试1', childTaskName: '银行缴纳罚款', MainTaskStatus: 1, OutWorkerStatus: 2, SubmitTaskTime: '2018-04-23T16:43:29' },
      { Id: 3694, MainTaskName: '通办测试1', childTaskName: '银行缴纳罚款', MainTaskStatus: 1, OutWorkerStatus: 2, SubmitTaskTime: '2018-04-23T16:43:29' }
    ]
    return (
      <div className={styles['customer-detail']}>
        <div style={{position: 'relative'}}>
          <h4 className={styles.title}>北京爱康鼎科技有限公司</h4>
          <Button className={styles.btn} type="primary" onClick={this.back}>
            返回
          </Button>
        </div>
        <div className={styles.con} style={{ margin: '24px 24px 0' }}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane className={styles['basic-info']} tab="客户基本信息" key="1">
              <CusDetail1
                data={tabData1}
                curKey={this.state.curKey}
              />
            </TabPane>
            <TabPane className={styles['basic-info']} tab="客户工商信息" key="2">
              <CusDetail1
                data={tabData1}
                curKey={this.state.curKey}
              />
            </TabPane>
            <TabPane className={styles['basic-info']} tab="订单合同信息" key="3">
              <Table
                rowKey={record => (record.OrderId)}
                dataSource={tabData2}
                columns={columns1}
                pagination={false}
              />
            </TabPane>
            <TabPane className={styles['basic-info']} tab="外勤任务信息" key="4">
              <Table
                rowKey={record => (record.Id)}
                dataSource={tabData3}
                columns={columns2}
                pagination={false}
              />
            </TabPane>
            <TabPane className={styles['basic-info']} tab="会计做账信息" key="5">
              <CusDetail1
                data={tabData4}
                curKey={this.state.curKey}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
