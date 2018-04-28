import React from 'react'
import { Breadcrumb } from 'antd'
import styles from '@/stylus/main'
import { withRouter } from 'react-router'
class PageHeader extends React.Component {
  goBack () {
    console.log(this.props, 'this.props')
    if (this.props.menu.child) {
      this.props.history.go(-1)
    }
  }
  render () {
    return (
      <div className={styles.header_page}>
        <Breadcrumb className={styles.mt_16}>
          <Breadcrumb.Item>{this.props.menu.menuParent}</Breadcrumb.Item>
          <Breadcrumb.Item onClick={this.goBack.bind(this)}>{this.props.menu.children}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.menu.child}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default withRouter(PageHeader)
