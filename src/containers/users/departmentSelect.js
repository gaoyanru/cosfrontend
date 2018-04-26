import React from 'react'
import { Select } from 'antd'
import { getAllDepartments } from '@/utils/api'

const Option = Select.Option

class DepartmentSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      departments: [],
      value: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    console.log(e, 'e')
    this.setState({
      value: e
    })
    this.props.onChange(e)
  }
  componentWillMount () {
    getAllDepartments().then(res => {
      if (res.status) {
        console.log(res, 'res')
        this.setState({
          departments: res.data.list
        })
      }
    })
  }
  render () {
    const options = this.state.departments.map(d => {
      return (
        <Option key={d.DepartmentId}>{d.DepartmentName}</Option>
      )
    })
    return (
      <Select style={{width: 150}} value={this.props.value} onChange={this.handleChange}>{options}</Select>
    )
  }
}
export default DepartmentSelect
