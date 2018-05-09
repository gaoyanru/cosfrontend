import React from 'react'
import styles from '@/stylus/modifydata'
class ContractType extends React.Component {
  render () {
    return (
      <div className={styles['contract-type']}>
        <div>记账报税</div>
        <div>增值</div>
        <div>代收</div>
      </div>
    )
  }
}
export default ContractType
