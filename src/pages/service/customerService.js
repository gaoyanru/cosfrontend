import React from 'react'
import _ from 'lodash'
import { Card, List, Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styles from '@/stylus/serviceCard'
import Search from '@/containers/Search'
import CustomerDetail from '@/pages/service/customerDetail'
import { fetchCustomerServiceList } from '@/utils/api'
import { fetchListAction } from '@/actions/customerService'
import { fOrganization } from '@/utils/filters'

class CustomerService extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: [],
      pagination: {
        current: 1,
        pageSize: 30
      }
    }
    this.goCustomerInfo = this.goCustomerInfo.bind(this)
    console.log(this.props, 'props')
    // this.props.dispatch(fetchListAction())
  }
  onSearch (res) {
    console.log(res, 'res')
    let params = {
      companyname: res[0],
      phone: res[1],
      connector: res[2]
    }
    console.log(params, 'params')
    const pagination = this.state.pagination
    if (params.companyname !== res.companyname || params.phone !== res.phone || params.connector !== res.phone) {
      this.setState({
        pagination: {
          current: 1,
          pageSize: 30
        }
      })
    } else {
      this.setState({
        pagination: {
          current: 0,
          pageSize: 30
        }
      }, () => {
        pagination.current += 1
      })
    }
    params.limit = pagination.pageSize
    params.offset = (pagination.current - 1) * pagination.pageSize
    fetchCustomerServiceList(params).then(res => {
      if (res.status) {
        this.setState({
          dataSource: this.state.dataSource.concat(res.data)
        })
      }
    })
  }
  goCustomerInfo (item, event) {
    console.log(event.currentTarget, 'item')
    if (event.target.className !== 'ant-card-head-title') {
      return
    }
    this.props.history.push({
      pathname: '/customerDetail',
      state: {
        key: item
      }
    })
    // this.props.history.push('/customerDetail')
  }
  render () {
    return (
      <div style={{ margin: '24px 24px 0' }}>
        <div className={styles.searchList}>
          <Search
            paramKeys={[1, 2, 3]}
            onSearch={this.onSearch.bind(this)}
            isAddUser={false}
          />
        </div>
        <div className={styles.cardList}>
          <List
            grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
            dataSource={this.state.dataSource}
            renderItem={item => (
              <List.Item key={item.Id}>
                <Card
                  title={item.CompanyName}
                  className={styles['card-head']}
                  onClick={this.goCustomerInfo.bind(this, item)}
                >
                  <Row>
                    <Col span={12}>
                      <label>联系人：</label>
                      <span>{item.Connector}</span>
                    </Col>
                    <Col span={12}>
                      <label>联系方式：</label>
                      <span>{item.Mobile}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <label>所属城市：</label>
                      <span>{item.CityName}</span>
                    </Col>
                    <Col span={12}>
                      <label>直营/渠道：</label>
                      <span>{item.ChannelName}</span>
                      <span>({fOrganization(item.CusType)})</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <label>订单数量：</label>
                      <span>{item.OrderNum}</span>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </div>
        {
          this.state.dataSource.length >= 30 &&
          <div style={{ textAlign: 'center' }}>
            <Button type="primary" onClick={this.onSearch.bind(this)}>加载跟更多</Button>
          </div>
        }
      </div>

    )
  }
}
export default connect()(CustomerService)
// export default UsersAccount
