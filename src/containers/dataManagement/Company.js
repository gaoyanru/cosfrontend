/**
 * Created by wanchao on 2018/5/4.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Form,
  Input,
  Icon,
  Select,
  Button,
  Card
} from 'antd'
import styles from '@/stylus/company'
import http from '../../utils/http'
const FormItem = Form.Item
const Option = Select.Option
const ButtonGroup = Button.Group
const ADDED_VALUE_MAP = {
  '1': '小规模',
  '2': '一般纳税人'
}

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // 是否编辑状态
      isEdit: true,
      // 直营公司列表
      subsidiary: [],
      // 选中的直营公司
      selectSubsidiary: {},
      // 区域列表
      areas: [],
      // 选中的区域
      selectArea: {},
      // 销售列表
      sales: [],
      // 选中的销售
      selectSales: {},
      // 当前公司的服务信息
      serviceInfo: {}
    }
    this.getCompany = this.getCompany.bind(this)
    this.getSubsidiaryList = this.getSubsidiaryList.bind(this)
    this.getAreaList = this.getAreaList.bind(this)
    this.getSalesList = this.getSalesList.bind(this)
    this.subsidiaryChange = this.subsidiaryChange.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }
  static get propTypes () {
    return {
      companyId: PropTypes.any.isRequired
    }
  }
  // 获取直营公司列表
  async getSubsidiaryList () {
    const url = `/api/subsidiaries`
    const { status, data } = await http(url)
    if (status && Array.isArray(data)) {
      this.setState({
        subsidiary: data
      })
    }
  }
  // 获取公司信息
  async getCompany () {
    const { companyId } = this.props
    const url = `/api/customer/${companyId}`
    const { status, data } = await http(url)
    if (status) {
      const { SubsidiaryId, Connector, Mobile, Telephone, AreaCode, SalesId, AddedValue } = data
      const selectSubsidiary = this.state.subsidiary.find(item => item.SubsidiaryId === SubsidiaryId) || this.state.subsidiary[0]
      // 初始化选中直营公司
      this.setState({
        selectSubsidiary,
        serviceInfo: {
          SubsidiaryId,
          Connector,
          Mobile,
          Telephone,
          AreaCode,
          SalesId,
          AddedValue
        }
      })
    }
  }
  // 获取区域列表
  async getAreaList (cityCode) {
    if (!cityCode) {
      return []
    }
    const { AreaCode: areaCode } = this.state.serviceInfo
    const url = `/api/areas/${cityCode}`
    const { status, data } = await http(url)
    if (status && Array.isArray(data)) {
      const selectArea = data.find(item => item.AreaCode === areaCode) || data[0]
      this.setState({
        areas: data,
        selectArea
      })
    }
  }
  // 获取销售列表
  async getSalesList (subsidiaryId) {
    if (!subsidiaryId) {
      return []
    }
    const { SalesId: salesId } = this.state.serviceInfo
    const url = `/api/sales/${subsidiaryId}`
    const { status, data } = await http(url)
    if (status && Array.isArray(data)) {
      const selectSales = data.find(item => item.Id === salesId) || data[0]
      this.setState({
        sales: data,
        selectSales
      })
    }
  }
  // 切换直营公司
  async subsidiaryChange (subsidiary) {
    const selectSubsidiary = this.state.subsidiary.find(item => item.CompanyName === subsidiary)
    const { SubsidiaryId: subsidiaryId, CityCode: cityCode } = selectSubsidiary
    // 获取直营公司所在地的区域列表和销售列表
    await Promise.all([
      this.getAreaList(cityCode),
      this.getSalesList(subsidiaryId)
    ])
    this.setState({
      selectSubsidiary
    })
  }
  // 切换区域
  areaChange (areaName) {

  }
  // 修改公司信息
  toggleEdit (flag) {
    this.setState({
      isEdit: flag
    })
    // flag为false，则为保存
    if (!flag) {
      console.log(flag)
    }
  }
  componentWillMount () {
    this.getSubsidiaryList().then(() => {
      return this.getCompany()
    }).then(() => {
      const { CityCode: cityCode, SubsidiaryId: subsidiaryId } = this.state.selectSubsidiary
      Promise.all([
        this.getAreaList(cityCode),
        this.getSalesList(subsidiaryId)
      ])
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const { isEdit, subsidiary, selectSubsidiary, sales, selectSales, areas, selectArea, serviceInfo } = this.state
    const editNode = (
      <div className={styles['edit-container']}>
        {
          isEdit ? <Button className={styles['btn']} type="primary" onClick={this.toggleEdit.bind(this, false)}>保存</Button> : <Icon className={styles['icon']} type="edit" onClick={this.toggleEdit.bind(this, true)} />
        }
      </div>
    )
    console.log(serviceInfo)
    return (
      <div className={styles['company']}>
        <Card title="基本信息" extra={editNode}>
          {
            isEdit ? <div className={styles['edit-rows']}>
              <Form>
                <Row >
                  <Col span={6}>
                    <FormItem label="所属直营" className={styles['company-col-item']}>
                      {getFieldDecorator('CompanyName', {
                        initialValue: selectSubsidiary.CompanyName
                      })(
                        <Select style={{ width: 160 }} onChange={this.subsidiaryChange}>
                          {
                            subsidiary.map(item => <Option key={item.SubsidiaryId} value={item.CompanyName}>{item.CompanyName}</Option>)
                          }
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="联系人" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="联系电话" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="座机" className={styles['company-col-item']}>
                      {getFieldDecorator('company', {
                        rules: [{
                          required: true,
                          message: 'Input something!'
                        }]
                      })(
                        <Input placeholder="placeholder" />
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label="负责销售" className={styles['company-col-item']}>
                      {getFieldDecorator('Sales', {
                        initialValue: selectSales.RealName
                      })(
                        <Select style={{ width: 160 }} onChange={this.subsidiaryChange}>
                          {
                            sales.map(item => <Option key={item.Id} value={item.RealName}>{item.RealName}</Option>)
                          }
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label="区域" className={styles['company-col-item']}>
                      {getFieldDecorator('AreaName', {
                        initialValue: selectArea.AreaName
                      })(
                        <Select style={{ width: 160 }} onChange={this.subsidiaryChange}>
                          {
                            areas.map(item => <Option key={item.ItemId} value={item.AreaName}>{item.AreaName}</Option>)
                          }
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} className={styles['company-col']}>
                    <label>
                      纳税人类别：
                    </label>
                    <span>
                      {ADDED_VALUE_MAP[serviceInfo.AddedValue]}
                    </span>
                  </Col>
                </Row>
              </Form>
            </div> : <div className={styles['unedit-rows']}>
              <Row >
                <Col span={6}>
                  <label>
                    所属直营：
                  </label>
                  <span>
                    {selectSubsidiary.CompanyName}
                  </span>
                </Col>
                <Col span={6}>
                  <label>
                    联系人：
                  </label>
                  <span>
                    {serviceInfo.Connector}
                  </span>
                </Col>
                <Col span={6}>
                  <label>
                    联系电话：
                  </label>
                  <span>
                    {serviceInfo.Mobile}
                  </span>
                </Col>
                <Col span={6}>
                  <label>
                    座机：
                  </label>
                  <span>
                    {serviceInfo.Telephone}
                  </span>
                </Col>
              </Row>
              <Row >
                <Col span={6}>
                  <label>
                    负责销售：
                  </label>
                  <span>
                    {selectSales.RealName}
                  </span>
                </Col>
                <Col span={6}>
                  <label>
                    区域：
                  </label>
                  <span>
                    {selectArea.AreaName}
                  </span>
                </Col>
                <Col span={6}>
                  <label>
                    纳税人类别：
                  </label>
                  <span>
                    {ADDED_VALUE_MAP[serviceInfo.AddedValue]}
                  </span>
                </Col>
              </Row>
            </div>
          }
          <div className={styles['company-detail']}>
            <Row >
              {
                isEdit ? <Col span={12}>
                  <label>公司名称：</label>
                  <Input placeholder="天眼查" style={{width: 200}} />
                  <ButtonGroup>
                    <Button>查 询</Button>
                    <Button>网 址</Button>
                    <Button>特殊公司</Button>
                  </ButtonGroup>
                </Col> : <Col span={6}>
                  <label>
                    信息来源：
                  </label>
                  <span></span>
                </Col>
              }
              <Col span={6}>
                <label>
                  法人姓名：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  统一社会信用代码：
                </label>
                <span></span>
              </Col>
            </Row>
            <Row >
              <Col span={6}>
                <label>
                  注册号：
                </label>
                <span></span>
              </Col>
              <Col span={6}>
                <label>
                  注册资金：
                </label>
                <span></span>
              </Col>
              <Col span={12}>
                <label>
                  营业护照：
                </label>
                <span></span>
              </Col>
            </Row>
            <Row >
              <Col span={12}>
                <label>
                  营业期限：
                </label>
                <span></span>
              </Col>
              <Col span={12}>
                <label>
                  公司地址：
                </label>
                <span></span>
              </Col>
            </Row>
            <Row >
              <Col span={24}>
                <label>
                  经营范围：
                </label>
                <span></span>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Company)
