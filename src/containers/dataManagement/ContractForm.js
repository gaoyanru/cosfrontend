import React from 'react'
import styles from '@/stylus/modifydata'
import _ from 'lodash'
import moment from 'moment'
import Modal from '@/components/common/Modal'
import AddedValue from '@/containers/searchComponent/AddedValue'
import { Button, Col, DatePicker, Input, message, Row, Select } from 'antd'
import { fContractStatus, fDate } from '@/utils/filters'
import ContractType from '@/containers/dataManagement/ContractType'
const { TextArea } = Input
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
    const modal = Modal.show({
      content: (
        <ContractType />
      ),
      title: '合同类型',
      mask: true,
      width: 400,
      footer: null,
      onCancel: () => {
        modal.hide()
      }
    })
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
          <Button
            className={styles['add-contract']}
            size="small"
            type="primary"
            onClick={this.addNew}>添加合同</Button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th style={{width: '200px'}}><span>合同编号</span></th>
                <th style={{width: '100px'}}><span>项目</span></th>
                <th style={{width: '100px'}}><span>子项目</span></th>
                <th style={{width: '145px'}}><span>费用</span></th>
                <th style={{width: '145px'}}><span>备注</span></th>
                <th style={{width: '90px'}}>领用金额</th>
                <th style={{width: '90px'}}>退费金额</th>
                <th style={{width: '90px'}}>合同状态</th>
                <th style={{width: '200px'}}><span>操作</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input size="small" placeholder="Basic usage" />
                </td>
                <td>记账报税</td>
                <td>
                  <Select defaultValue="lucy" size="small" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </td>
                <td>
                  <Input size="small" placeholder="" />
                </td>
                <td>
                  <Input size="small" placeholder="" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button size="small">添加子项目</Button>
                  <Button size="small">删除</Button>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={9}
                  style={{
                    background: 'rgb(248, 215, 149)',
                    padding: '3px 12px',
                    textAlign: 'left'
                  }}
                >
                  服务期限：
                  <Input size="small" style={{width: '35px'}} maxLength={2} />
                  &nbsp;
                  +
                  &nbsp;
                  <Input size="small" style={{width: '35px'}} maxLength={2} />
                  &nbsp;&nbsp;
                  服务时间：
                  <DatePicker size="small" />
                  -
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={9}
                  className={styles['footer']}
                >
                  <ul>
                    <li>
                      记账报税费用：100
                    </li>
                    <li>
                      财务服务费用：100
                    </li>
                    <li>
                      外勤服务费用：0
                    </li>
                    <li>
                      代收费用：0
                    </li>
                    <li>
                      订单总金额：200
                    </li>
                    <li>
                      <label className="ant-form-item-required">签订日期：</label>
                      <DatePicker size="small" />
                    </li>
                  </ul>
                </td>
              </tr>
            </tfoot>
          </table>
          <div style={{marginTop: '10px'}}>
            <Row>
              <Col className="gutter-row" span={2}>
                <label style={{fontSize: '12px'}}>备注信息：</label>
              </Col>
              <Col className="gutter-row" span={22}>
                <TextArea />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
export default Main
