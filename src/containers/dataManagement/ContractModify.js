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
        <ContractInfo
          data={this.props.data}
        />
        {
          /*
          <PayInfo
            data={this.props.data}
          />
          */
        }
      </div>
    )
  }
}
export default Main
