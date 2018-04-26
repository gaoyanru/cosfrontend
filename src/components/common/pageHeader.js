import React from 'react'
import { Breadcrumb } from 'antd'
import styles from '@/stylus/main'
class PageHeader extends React.Component {
  render () {
    return (
      <div className={styles.header_page}>
        <Breadcrumb className={styles.mt_16}>
          <Breadcrumb.Item>{this.props.menu.menuParent}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.menu.children}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.menu.child}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default PageHeader
