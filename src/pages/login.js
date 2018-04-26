import React from 'react'
import { Spin, Form, Icon, Button, Row, Col, Tabs, message } from 'antd'
import CInput from '@/components/common/clearableInput'
import styles from '@/stylus/login'
import { Redirect } from 'react-router-dom'
import { requestLogin } from '@/utils/api'
const FormItem = Form.Item

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      isLogin: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    console.log('aa')
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values, 'values')
        requestLogin(values).then(loginRes => {
          if (loginRes.status) {
            sessionStorage.setItem('token', loginRes.data.Token)
            this.setState({
              loading: true,
              isLogin: true
            })
          } else {
            this.setState({
              loading: false,
              isLogin: false
            })
          }
        })
      }
    })
  }
  render () {
    if (this.state.isLogin) {
      return (
        <Redirect to={'/customer'} />
      )
    }
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles.login}>
        <div className={styles.title}>
          <span className={styles.logo}></span>
          <span className={styles.text}>噼里啪渠道管理系统</span>
          <span className={styles.text_tag}>V2.0.7</span>
        </div>
        <div className={styles.logo_context}>
          <Row>
            <Col span={24}>
              <Spin spinning={this.state.loading}>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem>
                    {getFieldDecorator('UserName', {
                      rules: [{ required: true, message: '请输入用户名' }]
                    })(
                      <CInput
                        prefix={<Icon type="user"/>}
                        placeholder="请输入用户名"
                        type="text"
                        size="large"
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('PassWord', {
                      rules: [{ required: true, message: '请输入密码' }]
                    })(
                      <CInput
                        prefix={<Icon type="lock"/>}
                        placeholder="请输入密码"
                        type="password"
                        size="large"
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit">登录</Button>
                  </FormItem>
                </Form>
              </Spin>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login)
