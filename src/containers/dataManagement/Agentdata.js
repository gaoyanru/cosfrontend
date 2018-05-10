import React from 'react'
import PropTypes from 'prop-types'
import styles from '@/stylus/modifydata'
import { Row, Col } from 'antd'
import { fAddedValue, fDate, fMonth, fInfoSource } from '@/utils/filters'
import http from '../../utils/http'
export default class AgentData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectCompany: {}
    }
    this.getAgentStatus = this.getAgentStatus.bind(this)
  }
  static get propTypes () {
    return {
      companyId: PropTypes.any.isRequired
    }
  }
  async getAgentStatus () {
    const { companyId } = this.props
    const url = `/api/fromAgent/${companyId}`
    const { status, data } = await http(url)
    console.log(status)
    console.log(data)
  }
  componentWillMount () {
    this.getAgentStatus()
  }
  render () {
    // const data = this.props.data
    const data = {
      id: 12334,
      businessDate: '2018-09-10',
      businessUserName: '习大大',
      accountUserName: '嘻嘻嘻',
      businessStatus: 1,
      businessStatus1: 1
    }
    return (
      <div>
        <Row className={styles['mt10']}>
          <Col span={4}>
            <label>序列ID：</label>
            <span>{data.id}</span>
          </Col>
          <Col span={4}>
            <label>开始账期：</label>
            <span>{fMonth(data.businessDate)}</span>
          </Col>
          <Col span={4}>
            <label>主办会计：</label>
            <span>{data.accountUserName}</span>
          </Col>
          <Col span={4}>
            <label>是否分配：</label>
            <span>{data.accountUserName}</span>
          </Col>
          <Col span={4}>
            <label>记账状态：</label>
            <span>{data.businessDate1}</span>
          </Col>
          <Col span={4}>
            <label>是否建账：</label>
            <span>{data.businessStatus}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
