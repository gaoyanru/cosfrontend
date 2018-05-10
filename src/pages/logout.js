import React from 'react'
export default class extends React.Component {
  componentWillMount () {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
    this.props.history.push('/login')
  }
  render () {
    return null
  }
}
