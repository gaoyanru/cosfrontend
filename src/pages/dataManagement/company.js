/**
 * Created by wanchao on 2018/5/4.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Company extends React.Component {
  static get propTypes () {
    return {
      type: PropTypes.number.isRequired
    }
  }
  render () {
    return (
      <div>
        company
      </div>
    )
  }
}

export default Company
