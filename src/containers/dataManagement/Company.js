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
    this.getCompany = this.getCompany.bind(this)
    this.editCompany = this.editCompany.bind(this)
  }
  static get propTypes () {
    return {
      type: PropTypes.number.isRequired
    }
  }
  // 获取公司信息
  getCompany () {
    console.log('get')
  }
  // 修改公司信息
  editCompany () {
  }
  render () {
    return (
      <div className={styles['company']}>
        <Card title="基本信息" extra={<Icon type="edit" onClick={this.editCompany} />}>
          <div className="edit-rows">
            <Row className={styles['company-row']}>
              <Col span={6}>
                <label>
                  所属直营：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  联系人：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  联系电话：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  座机：
                </label>
                <span></span>
              </Col>
            </Row>
            <Row className={styles['company-row']}>
              <Col span={6}>
                <label>
                  负责销售：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  区域：
                </label>
                <span></span>
              </Col>
              <Col span={12}>
                <label>
                  服务截止：
                </label>
                <span></span>
              </Col>
            </Row>
          </div>
          <Row className={styles['company-row']}>
            <Col span={6}>
              <label>
                信息来源：
              </label>
              <span></span>
            </Col>
            <Col span={6}>
              <label>
                法人姓名：
              </label>
              <span></span>
            </Col>
            <Col span={12}>
              <label>
                统一社会信用代码：
              </label>
              <span></span>
            </Col>
          </Row>
          <Row className={styles['company-row']}>
            <Col span={6}>
              <label>
                注册号：
              </label>
              <span></span>
            </Col>
            <Col span={6}>
              <label>
                注册资金：
              </label>
              <span></span>
            </Col>
            <Col span={12}>
              <label>
                营业护照：
              </label>
              <span></span>
            </Col>
          </Row>
          <Row className={styles['company-row']}>
            <Col span={12}>
              <label>
                营业期限：
              </label>
              <span></span>
            </Col>
            <Col span={12}>
              <label>
                公司地址：
              </label>
              <span></span>
            </Col>
          </Row>
          <Row className={styles['company-row']}>
            <Col span={24}>
              <label>
                经营范围：
              </label>
              <span></span>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Company
