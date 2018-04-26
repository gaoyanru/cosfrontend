import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from '@/stylus/modal'
import PropTypes from 'prop-types'
import DepartmentSelect from '@/containers/users/departmentSelect'
const FormItem = Form.Item

class UserInfo extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values, 'values')
      }
    })
  }
  render () {
    // const validatePhoneRepeat = (rule, value, callback) => {
    //   if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
    //     callback('手机号码格式不正确')
    //   }
    // }
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const props = this.props
    const { getFieldDecorator } = props.form
    return (
      <Form onSubmit={this.handleSubmit} className={styles['user-info']}>
        <FormItem
          {...formItemLayout}
          label="姓名"
          hasFeedback
        >
          {getFieldDecorator('RealName', {
            rules: [{
              required: true, message: '请填写姓名!'
            }],
            initialValue: props.user.RealName
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号"
          hasFeedback
        >
          {getFieldDecorator('Phone', {
            initialValue: props.user.Phone,
            rules: [
              { type: 'string', required: true, message: '请输入手机号码！' }
              // { validator: validatePhoneRepeat }
            ]
          })(
            <Input/>
          )}
        </FormItem>
        {props.isNew && <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('PassWord', {
            rules: [{
              required: true, message: '请填写密码!'
            }]
          })(
            <Input type="text" />
          )}
        </FormItem>}
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('Email', {
            rules: [{
              type: 'email', message: '邮箱格式不正确！'
            }, {
              required: true, message: '请输入邮箱'
            }],
            initialValue: props.user.Email
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="部门"
        >
          {getFieldDecorator('DepartmentCenterId', {
            rules: [{
              required: true, message: '请选择部门'
            }],
            initialValue: props.user.DepartmentCenterId
          })(
            <DepartmentSelect/>
          )}
        </FormItem>
      </Form>
    )
  }
}
UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  isNew: PropTypes.bool
}
export default Form.create()(UserInfo)
