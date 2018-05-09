import React from 'react'
import styles from '@/stylus/modifydata'
import _ from 'lodash'
import moment from 'moment'
import Modal from '@/components/common/Modal'
import AddedValue from '@/containers/searchComponent/AddedValue'
import { Button, Col, DatePicker, Input, message, Row, Select } from 'antd'
import { fContractStatus, fDate } from '@/utils/filters'
import ContractType from '@/containers/dataManagement/ContractType'
import stores from '@/stores'
import { updateOrderItem } from '@/actions/dataedit'
const { dispatch } = stores
const { TextArea } = Input
class Main extends React.Component {
  constructor (props) {
    super(props)
    const { contractInfo, mainItemList, orderItem } = stores.getState().dataedit
    this.state = {
      costs: [0, 0, 0, 0],
      contractInfo,
      mainItemList,
      orderItem
    }
    this.addNew = this.addNew.bind(this)
    this.unsubscribe = stores.subscribe(() => {
      const state = stores.getState()
      const { contractInfo, mainItemList, orderItem } = state.dataedit
      this.setState({
        contractInfo,
        mainItemList,
        orderItem
      })
    })
  }
  componentWillUnmount () {
    this.unsubscribe()
  }
  addNew () {
    const modal = Modal.show({
      content: (
        <ContractType cb={() => { modal.hide() }} />
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
  getNode (index) {
    const { contractInfo, mainItemList, orderItem } = this.state
    const Rows = contractInfo[index]
    const Nodes = []
    const length = Rows.length
    Rows.map((item, index2) => {
      item = item || {}
      const Options = mainItemList[item.MainItemId - 1].Children
      Nodes.push(
        <tr key={`contract-info-${index}-${index2}`}>
          {
            ((length > 1 && index2 === 0) || length === 1) &&
            <td rowSpan={length}>
              <Input
                size="small"
                defaultValue={item.ContractNo}
                onChange={this.handleChange.bind(this, 'ContractNo', index, index2)}
              />
            </td>
          }
          <td>
            {index === 0 && <span>记账保税</span>}
            {
              index === 1 && (
                <Select
                  defaultValue={item.MainItemId}
                  size="small"
                  style={{ width: 120 }}
                  onChange={this.handleChange.bind(this, 'MainItemId', index, index2)}
                >
                  <Select.Option value={2}>财务服务费</Select.Option>
                  <Select.Option value={3}>外勤服务费</Select.Option>
                </Select>
              )
            }
            {index === 2 && <span>代收费</span>}
          </td>
          <td>
            {
              <Select
                size="small"
                style={{ width: 120 }}
                defaultValue={item.ChildItemId}
                value={item.ChildItemId}
                onChange={this.handleChange.bind(this, 'ChildItemId', index, index2)}
              >
                {
                  Options.map((item, index) => {
                    return (
                      <Select.Option
                        key={`contract-option1-${index}`}
                        value={item.Id}
                        onChange={this.handleChange.bind(this, 2, index, index2)}
                      >
                        {item.ChildItemName}
                      </Select.Option>
                    )
                  })
                }
              </Select>
            }
          </td>
          <td>
            <Input
              size="small"
              defaultValue={item.Amount}
              onChange={this.handleChange.bind(this, 'Amount', index, index2)}
            />
          </td>
          <td>
            <Input
              size="small"
              // onChange={this.handleChange.bind(this, 4, index, index2)}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            {
              index !== 0 && (
                <Button size="small" onClick={this.operateChildItem.bind(this, index, -1)}>
                  添加子项目
                </Button>
              )
            }
            <Button size="small" onClick={this.operateChildItem.bind(this, index, index2)}>删除</Button>
          </td>
        </tr>
      )
    })
    return Nodes
  }
  handleChange (field, index1, index2, value) {
    const { contractInfo, mainItemList, orderItem } = this.state
    const CrmOrderItems = []
    const contractItem = contractInfo[index1][index2]
    if (['ContractNo', 'Amount'].indexOf(field) > -1) {
      value = value.target.value
    }
    if (field === 'MainItemId') {
      contractItem.ChildItemId = ''
    }
    contractItem[field] = value
    contractInfo.map((item) => {
      item.map((item2) => {
        CrmOrderItems.push(item2)
      })
    })
    const payload = orderItem
    payload.CrmOrderItems = CrmOrderItems
    dispatch(updateOrderItem(payload))
  }
  operateChildItem (index, index2) {
    const { contractInfo, mainItemList, orderItem } = this.state
    const MainItemId = index === 2 ? 4 : index + 1
    const CrmOrderItems = []
    if (index2 === -1) {
      contractInfo[index].push({
        MainItemId
      })
    } else {
      contractInfo[index].splice(index2, 1)
    }

    contractInfo.map((item) => {
      item.map((item2) => {
        CrmOrderItems.push(item2)
      })
    })
    const payload = orderItem
    payload.CrmOrderItems = CrmOrderItems
    dispatch(updateOrderItem(payload))
  }
  handleCost () {
    const { contractInfo } = this.state
    const costs = [0, 0, 0, 0]
    contractInfo.map((item) => {
      item.map((item2) => {
        // if (item2.MainItemId) {

        // }
      })
    })
  }
  render () {
    // const { mainItemList } = this.props
    // console.log(mainItemList, 'mainItemList')
    const { contractInfo } = this.state
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
              {this.getNode(0)}
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
              {this.getNode(1)}
              {this.getNode(2)}
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