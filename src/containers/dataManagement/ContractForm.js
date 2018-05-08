import React from 'react'
import styles from '@/stylus/modifydata'
import _ from 'lodash'
import moment from 'moment'
import AddedValue from '@/containers/searchComponent/AddedValue'
import { Button, message } from 'antd'
import { fContractStatus, fDate } from '@/utils/filters'
class Accounting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data
    }
    this.setFieldValue = this.setFieldValue.bind(this)
    this.getFieldValue = this.getFieldValue.bind(this)
    this.validateField = this.validateField.bind(this)
  }
  setFieldValue (obj) {
    let data = _.cloneDeep(this.state.data)
    data = _.extend(data, obj)
    if (obj.ServiceStart) {
      const m = parseInt(data.OrderMonths || 0) + parseInt(data.GiftMonths || 0)
      if (!m) {
        message.error('请先设置服务期限')
        return
      }
      data.ServiceEnd = moment(obj.ServiceStart).add(m - 1, 'months').endOf('month').format('YYYY-MM-DD')
    }
  }
  validateField () {
    const data = this.state.data
    if (!data.ContractNo) return '请填写合同编号'
    if (!data.ChildItemId) return '请选择子项目'
    if (!data.OrderMonths) return '请填写服务期限'
    if (!data.Amount) return '请填写费用金额'
    return null
  }
  getFieldValue () {
    return this.state.data
  }
  render () {
    const data = this.props.data
    console.log(data, 'data')
    return (
      <tbody key="group1">
        <tr>
          <td>
            <Input size="small" defaultValue={data.ContractNo} onChange={e => {
              this.setFieldValue({
                ContractNo: e.target.value
              })
            }}
            />
          </td>
          <td>记账报税</td>
          <td>
            <AddedValue size="small" hideAll={true} value={data.ChildItemId} onChange={v => {
              this.setFieldValue({
                ChildItemId: +v
              })
            }}
            />
          </td>
          <td>
            <Input size="small" defaultValue={data.Amount} onChange={e => {
              this.setFieldValue({
                Amount: e.target.value
              })
            }}
            />
          </td>
          <td>
            <Input size="small" maxLength="50" defaultValue={data.Remark} onChange={e => {
              this.setFieldValue({
                Remark: e.target.value
              })
            }}
            />
          </td>
          <td></td>
          <td></td>
          <td>
            {fContractStatus(data.Status)}
          </td>
          <td>
            <Button size="small" onClick={this.props.onDelete}>删除</Button>
          </td>
        </tr>
        <tr>
          <td style={{ background: '#f8d795', padding: '3px 12px' }}>
            <span>服务期限：
              <Input maxLength="2" size="small" defaultValue={data.OrderMonths} style={{ width: '35px' }} onChange={e => {
                this.setFieldValue({
                  OrderMonths: e.target.value
                })
              }}
              />
              +
              <Input maxLength="2" size="small" defaultValue={data.GiftMonths} style={{ width: '25px' }} onChange={e => {
                this.setFieldValue({
                  GiftMonths: e.target.value
                })
              }}
              />
            </span>
            <span>服务时间：
              <Input size="small" defaultValue={fDate(data.ServiceStart)} style={{ width: '90px' }} onChange={e => {
                this.setFieldValue({
                  ServiceStart: e.target.value
                })
              }}
              />
              -
              <span>{this.state.data.ServiceEnd}</span>
            </span>
          </td>
        </tr>
      </tbody>
    )
  }
}
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type1: null,
      type2: null,
      type3: null
    }
    this.addNew = this.addNew.bind(this)
    this.setAmount = this.setAmount.bind(this)
    this.formatData = this.formatData.bind(this)
    const state = this.formatData(props.data)
    this.state = _.extend(this.state, state)
  }
  addNew () {
    console.log('添加合同')
  }
  setAmount () {
    console.log('aa')
  }
  formatData (data) {
    if (data) {
      let nextState = _.pick(data, ['ContractDate', 'Remark', 'BookKeepFeed', 'FinanceServiceFeed', 'OutWorkServiceFeed', 'AgentFeed', 'Amount'])
      nextState.ContractDate = nextState.ContractDate && moment(nextState.ContractDate)
      const crmOrderItems = data.CrmOrderItems || data.Contracts
      let type1 = _.find(crmOrderItems, { MainItemId: 1 })
      if (type1) {
        type1.Group = 1
      }
    }
  }
  render () {
    return (
      <div className={styles['contract-form']}>
        <div className={styles.title}>
          <span>合同信息</span>
          <Button className={styles.fr} type="primary" onClick={this.addNew}>添加合同</Button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th style={{width: '200px'}}><span>合同编号</span></th>
                <th style={{width: '100px'}}><span>项目</span></th>
                <th style={{width: '100px'}}><span>子项目</span></th>
                <th style={{width: '150px'}}><span>费用</span></th>
                <th style={{width: '150px'}}><span>备注</span></th>
                <th style={{width: '100px'}}>领用金额</th>
                <th style={{width: '100px'}}>退费金额</th>
                <th style={{width: '100px'}}>合同状态</th>
                <th style={{width: '160px'}}><span>操作</span></th>
              </tr>
            </thead>
            {
              this.state.type1 &&
              <Accounting
                onAmountChange={this.setAmount}
                ref={e => { this.component1 = e }}
                data={this.state.type1}
                onDelete={e => { this.delete(1) }}
              />
            }
          </table>
        </div>
      </div>
    )
  }
}
export default Main
