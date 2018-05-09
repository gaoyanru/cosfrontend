import React from 'react'
import { Spin, Form, Icon, Button, Row, Col, Tabs, message } from 'antd'
import CInput from '@/components/common/ClearableInput'
import styles from '@/stylus/login'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { requestLogin } from '@/utils/api'
import { changeLoginStat } from '@/actions/common'
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
            sessionStorage.setItem('token', loginRes.data.token)
            sessionStorage.setItem('userInfo', JSON.stringify(loginRes.data.username))
            this.props.dispatch(changeLoginStat('in'))
            this.setState({
              loading: true,
              isLogin: true
            })
            if (loginRes.data.username === 'kefu') {
              this.props.history.push('/customer')
            } else if (loginRes.data.username === 'dm') {
              this.props.history.push('/datamanagement')
            }
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
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles.login}>
        <div className={styles.title}>
          <span className={styles.logo}></span>
          <span className={styles.text}>噼里啪中心运营管理系统</span>
          <span className={styles.text_tag}>V1.0.0</span>
        </div>
        <div className={styles.logo_context}>
          <Row>
            <Col span={24}>
              <Spin spinning={this.state.loading}>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem>
                    {getFieldDecorator('username', {
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
                    {getFieldDecorator('password', {
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
export default connect()(Form.create()(withRouter(Login)))
