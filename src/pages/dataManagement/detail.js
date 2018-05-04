import React from 'react'
import styles from '@/stylus/modifydata'
import { Card } from 'antd'
import AgentData from '@/containers/dataManagement/Agentdata'
class ModifyData extends React.Component {
  onSearch (res) {
    console.log(res)
    let params = {
      companyname: res[0],
      phone: res[1],
      connector: res[2]
    }
  }
  render () {
    return (
      <div style={{ margin: '24px 24px 0' }}>
        <Card title='Agent数据'>
          <AgentData/>
        </Card>
      </div>
    )
  }
}
export default ModifyData
