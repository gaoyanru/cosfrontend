import React from 'react'
import styles from '@/stylus/strategy'
import StrategyCon1 from '@/containers/users/strategyCon1'
import StrategyCon2 from '@/containers/users/strategyCon2'
import StrategyCon3 from '@/containers/users/strategyCon3'
import StrategyCon4 from '@/containers/users/strategyCon4'
import { notification } from 'pilipa'
import { Steps, Button } from 'antd'
const Step = Steps.Step
class UsersAddStrategy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  next () {
    const current = this.state.current + 1
    this.setState({ current })
  }
  prev () {
    const current = this.state.current - 1
    this.setState({ current })
  }
  down () {
    let msgConf = null
    msgConf = {
      title: '新建策略成功',
      message: ''
    }
    notification.success(msgConf)
  }
  render () {
    const steps = [{
      title: '创建策略',
      content: '<h1>aaaa</h1>'
    }, {
      title: '设置功能及权限',
      content: '<h1>bbbb</h1>'
    }, {
      title: '设置范围权限',
      content: '<h1>cccc</h1>'
    }, {
      title: '设置字段权限',
      content: '<h1>ddd</h1>'
    }]
    const { current } = this.state
    return (
      <div>
        <div className={styles.title}>流程进度</div>
        <Steps className={styles.steps} current={this.state.current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className={styles.content}>
          {
            (this.state.current === 0) &&
            <StrategyCon1/>
          }
          {
            (this.state.current === 1) &&
            <StrategyCon2/>
          }
          {
            (this.state.current === 2) &&
            <StrategyCon3/>
          }
          {
            (this.state.current === 3) &&
            <StrategyCon4/>
          }
          <div className="steps-action">
            {
              (this.state.current > 0) &&
              <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>上一步</Button>
            }
            {
              (this.state.current < steps.length - 1) &&
              <Button type="primary" onClick={() => this.next()}>下一步</Button>
            }
            {
              (this.state.current === steps.length - 1) &&
              <Button type="primary" onClick={() => this.down()}>确定</Button>
            }
          </div>
        </div>
      </div>
    )
  }
}
export default UsersAddStrategy
