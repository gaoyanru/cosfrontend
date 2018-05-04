/**
 * Created by wanchao on 2018/5/4.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Icon,
  Card
} from 'antd'
import styles from '@/stylus/company'

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.editCompany = this.editCompany.bind(this)
  }
  static get propTypes () {
    return {
      type: PropTypes.number.isRequired
    }
  }
  // 修改公司信息
  editCompany () {
  }
  render () {
    return (
      <div>
        <Card title="基本信息" extra={<Icon type="edit" onClick={this.editCompany} />}>
          <Row>
            <Col span={6}>
              <p>
                所属直营：
              </p>
            </Col>
            <Col span={6}>
              <p>
                联系人：
              </p>
            </Col>
            <Col span={6}>
              <p>
                联系电话：
              </p>
            </Col>
            <Col span={6}>
              <p>
                座机：
              </p>
            </Col>
          </Row>
          <Row className={styles['']}>
            <Col span={6}>
              <p>
                负责销售：
              </p>
            </Col>
            <Col span={6}>
              <p>
                区域：
              </p>
            </Col>
            <Col span={6}>
              <p>
                服务截止：
              </p>
            </Col>
            <Col span={6}>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Company
