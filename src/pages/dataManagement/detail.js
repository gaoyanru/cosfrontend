import React from 'react'
import styles from '@/stylus/modifydata'
import { Card, Button } from 'antd'
import AgentData from '@/containers/dataManagement/Agentdata'
class ModifyData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      CompanyName: '北京爱康定'
    }
    this.back = this.back.bind(this)
  }
  onSearch (res) {
    console.log(res)
    let params = {
      companyname: res[0],
      phone: res[1],
      connector: res[2]
    }
  }
  back () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div>
        <div style={{position: 'relative'}}>
          <h4 className={styles.title}>{this.state.CompanyName}</h4>
          <Button className={styles.btn} type="primary" onClick={this.back}>
            返回
          </Button>
        </div>
        <div style={{ margin: '24px 24px 0' }}>
          <Card title='Agent数据'>
            <AgentData/>
          </Card>
        </div>
      </div>
    )
  }
}
export default ModifyData
