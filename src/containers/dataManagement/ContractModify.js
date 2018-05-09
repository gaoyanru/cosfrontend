import React from 'react'
import ContractInfo from '@/containers/dataManagement/ContractForm'
import PayInfo from '@/containers/dataManagement/PayInfo'
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }
  render () {
    return (
      <div>
        <ContractInfo />
        <PayInfo />
      </div>
    )
  }
}
export default Main
