import React from 'react'
import { Row, Col } from 'antd'
import styles from '@/stylus/modifydata'
import { fDate, fAgentStatus } from '@/utils/filters'
import { fetchAgentServiceData, fetchAgentServiceList } from '@/utils/api'
export default class AgentService extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      headData: {},
      listDara: [],
      customerId: ''
    }
    this.getAgentData = this.getAgentData.bind(this)
    this.getAgentList = this.getAgentList.bind(this)
  }
  componentWillMount () {
    this.setState({
      customerId: this.props.Id
    }, () => {
      this.getAgentData(this.state.customerId)
      this.getAgentList(this.state.customerId)
    })
  }
  getAgentData (id) {
    fetchAgentServiceData(id).then(res => {
      if (res.status) {
        this.setState({
          headData: res.data
        })
      }
    })
  }
  getAgentList (id) {
    fetchAgentServiceList(id).then(res => {
      if (res.status) {
        this.setState({
          listDara: res.data
        })
      }
    })
  }
  render () {
    const data = this.state.headData
    return (
      <div>
        <Row className={styles['mt10']}>
          <Col span={4}>
            <label>记账报税总额：</label>
            <span>{data.amount}</span>
          </Col>
          <Col span={4}>
            <label>记账合同：</label>
            <span>{data.count}</span>
          </Col>
          <Col span={4}>
            <label>服务期限：</label>
            <span>{data.timespan}</span>
          </Col>
          <Col span={4}>
            <label>报税状态：</label>
            <span>{fAgentStatus(data.AgentStatus)}</span>
          </Col>
          <Col span={4}>
            <label>开始服务日期：</label>
            <span>{fDate(data.ServiceStart)}</span>
          </Col>
          <Col span={4}>
            <label>结束日期：</label>
            <span>{fDate(data.ServiceEnd)}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
