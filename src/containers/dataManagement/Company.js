/**
 * Created by wanchao on 2018/5/4.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Form,
  Input,
  Icon,
  Select,
  Button,
  Card
} from 'antd'
import styles from '@/stylus/company'
const FormItem = Form.Item
const Option = Select.Option
const ButtonGroup = Button.Group

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdit: true
    }
    this.getCompany = this.getCompany.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
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
  toggleEdit (flag) {
    this.setState({
      isEdit: flag
    })
    // flag为false，则为保存
    if (!flag) {
      console.log(flag)
    }
  }
  componentWillMount () {
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const { isEdit } = this.state
    const editNode = (
      <div className={styles['edit-container']}>
        {
          isEdit ? <Button className={styles['btn']} type="primary" onClick={this.toggleEdit.bind(this, false)}>保存</Button> : <Icon className={styles['icon']} type="edit" onClick={this.toggleEdit.bind(this, true)} />
        }
      </div>
    )
    return (
      <div className={styles['company']}>
        <Card title="基本信息" extra={editNode}>
          {
            isEdit ? <div className={styles['edit-rows']}>
              <Form>
                <Row >
                  <Col span={6}>
                    <FormItem label="所属直营" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }],
                        initialValue: 'Yiminghe'
                      })(
                        <Select style={{ width: 120 }}>
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="disabled" disabled>Disabled</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="联系人" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="联系电话" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="座机" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label="负责销售" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="区域" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} className={styles['company-col']}>
                    <label>
                      服务截止：
                    </label>
                    <span></span>
                  </Col>
                  <Col span={6} className={styles['company-col']}>
                    <label>
                      纳税人类别：
                    </label>
                    <span></span>
                  </Col>
                </Row>
              </Form>
            </div> : <div className={styles['unedit-rows']}>
              <Row >
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
              <Row >
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
                <Col span={6}>
                  <label>
                    服务截止：
                  </label>
                  <span></span>
                </Col>
                <Col span={6}>
                  <label>
                    纳税人类别：
                  </label>
                  <span></span>
                </Col>
              </Row>
            </div>
          }
          <div className={styles['company-detail']}>
            <Row >
              {
                isEdit ? <Col span={12}>
                  <label>公司名称：</label>
                  <Input placeholder="天眼查" style={{width: 200}} />
                  <ButtonGroup>
                    <Button>查 询</Button>
                    <Button>网 址</Button>
                    <Button>特殊公司</Button>
                  </ButtonGroup>
                </Col> : <Col span={6}>
                  <label>
                    信息来源：
                  </label>
                  <span></span>
                </Col>
              }
              <Col span={6}>
                <label>
                  法人姓名：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  统一社会信用代码：
                </label>
                <span></span>
              </Col>
            </Row>
            <Row >
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
            <Row >
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
            <Row >
              <Col span={24}>
                <label>
                  经营范围：
                </label>
                <span></span>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Company)
