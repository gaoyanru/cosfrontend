import React from 'react'
import styles from '@/stylus/modifydata'
import { Row, Col } from 'antd'
import { fAddedValue, fDate, fMonth, fInfoSource } from '@/utils/filters'
export default class AgentData extends React.Component {
  render () {
    // const data = this.props.data
    const data = {
      businessDate: '2017-02-09',
      businessUserName: '习大大',
      accountUserName: '嘻嘻嘻',
      businessStatus: 1,
      businessStatus1: 1,
      businessDate1: '2017-02-09'
    }
    return (
      <div>
        <Row className={styles['mt10']}>
          <Col span={8}>
            <label>开始账期：</label>
            <span>{fMonth(data.businessDate)}</span>
          </Col>
          <Col span={8}>
            <label>主办会计：</label>
            <span>{data.businessUserName}</span>
          </Col>
          <Col span={8}>
            <label>核算会计：</label>
            <span>{data.accountUserName}</span>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <label>记账状态：</label>
            <span>{data.businessDate1}</span>
          </Col>
          <Col span={8}>
            <label>是否建账：</label>
            <span>{data.businessStatus}</span>
          </Col>
          <Col span={8}>
            <label>创建时间：</label>
            <span>{data.businessStatus1}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
