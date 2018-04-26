import React from 'react'
// import SearchForm from '@/components/common/searchForm'
import { Card, Row, Col, Form, Input, Select, Icon, Button, Dropdown, InputNumber, Table } from 'antd'
import Search from '@/containers/Search'
import styles from '@/stylus/tableContent'
const FormItem = Form.Item
class TableCon extends React.Component {
  onSearch (res) {
    console.log(res)
  }
  render () {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]
    const columns = [{
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age'
    }, {
      title: '住址',
      dataIndex: 'address'
    }]
    return (
      <Card bordered={false}>
        <div className={styles.tableList}>
          <div className={styles.tableListForm}>
            <Search
              paramKeys={[4, 3]}
              onSearch={this.onSearch.bind(this)}
            />
          </div>
          <div style={{ height: '500px' }}>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </Card>
    )
  }
}
export default Form.create()(TableCon)
