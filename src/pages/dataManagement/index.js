import React from 'react'
import styles from '@/stylus/modifydata'
import Search from '@/containers/Search'
import Company from './company'

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
        <div className={styles.searchList}>
          <Search
            paramKeys={[1, 3, 2]}
            onSearch={this.onSearch.bind(this)}
            isAddUser={false}
          />
        </div>
        <div className={styles.mt24}>
          <Company type={1} />
        </div>
      </div>
    )
  }
}
export default ModifyData
