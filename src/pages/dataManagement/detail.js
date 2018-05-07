import React from 'react'
import styles from '@/stylus/modifydata'
import { Card, Button, Tabs } from 'antd'
import AgentData from '@/containers/dataManagement/Agentdata'
import Company from '@/containers/dataManagement/Company'
const TabPane = Tabs.TabPane
class ModifyData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      CompanyName: '北京爱康定'
    }
    this.back = this.back.bind(this)
    this.callback = this.callback.bind(this)
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
  callback (key) {
    console.log(key)
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
        <div style={{ margin: '24px 24px 0' }}>
          <Company type={1}/>
        </div>
        <div className={styles.con} style={{ margin: '24px 24px 0' }}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane className={styles['basic-info']} tab="订单" key="1">
              <div>ssss</div>
            </TabPane>
            <TabPane className={styles['basic-info']} tab="外勤任务信息" key="2">
              <div>sssss</div>
            </TabPane>
            <TabPane className={styles['basic-info']} tab="记账服务" key="3">
              <div>sssss</div>
            </TabPane>
            <TabPane className={styles['basic-info']} tab="操作记录" key="4">
              <div>sssss</div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
export default ModifyData
