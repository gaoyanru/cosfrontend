import React from 'react'
import { Card, Row, Col, Form, Input, Button, Table, Divider } from 'antd'
import { connect } from 'react-redux'
import styles from '@/stylus/tableContent'
import Modal from '@/components/common/modal'
import UserInfo from '@/containers/users/userInfo'
import Search from '@/containers/Search'
import { fetchListAction } from '@/actions/usersAccount'
const FormItem = Form.Item
class UsersAccount extends React.Component {
  constructor (props) {
    super(props)
    // this.editUser = this.editUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.accreditUser = this.accreditUser.bind(this)
    this.addNew = this.addNew.bind(this)
    console.log(this.props, 'props')
    // this.props.dispatch(fetchListAction())
  }
  onSearch (res) {
    console.log(res)
  }
  editUser (record) {
    console.log(record, 'record')
  }
  deleteUser (record) {
    const modal = Modal.show({
      content: (
        <div>确定要删除员工吗？</div>
      ),
      title: '',
      mask: true,
      onOk: () => {
        console.log('确认删除', '确定')
        modal.hide()
      },
      onCancel: () => {
        modal.hide()
      }
    })
  }
  accreditUser (record) {
    console.log(record, 'record')
  }
  addNew () {
    const modal = Modal.show({
      content: (
        <UserInfo
          ref={userform => { this.userform = userform }}
          user={{}}
          isNew={true}
        />
      ),
      footer: null,
      mask: true,
      onOk: () => {
        // ref 就能获取组件的信息了
        console.log(this.userform, '确定')
        this.userform.validateFields((err, values) => {
          if (!err) {
            console.log(values)
            modal.hide()
          }
        })
      },
      onCancel: () => {
        modal.hide()
      }
    })
  }
  render () {
    const dataSource = [{
      UserId: 1,
      UserName: 'liubing',
      RealName: '刘娜',
      Phone: '13521677472',
      Email: 'liuna@i-counting.cn',
      RoleStrs: '管理员',
      DepartmentName: '渠道部'
    }, {
      UserId: 2,
      UserName: 'liubing',
      RealName: '刘娜',
      Phone: '13521677472',
      Email: 'liuna@i-counting.cn',
      RoleStrs: '管理员',
      DepartmentName: '渠道部'
    }]
    const columns = [{
      title: '用户名',
      dataIndex: 'UserName'
    }, {
      title: '姓名',
      dataIndex: 'RealName'
    }, {
      title: '手机',
      dataIndex: 'Phone'
    }, {
      title: '邮箱',
      dataIndex: 'Email'
    }, {
      title: '角色',
      dataIndex: 'RoleStrs'
    }, {
      title: '部门',
      dataIndex: 'DepartmentName'
    }, {
      title: '操作',
      render: (text, record) => {
        return (
          <span>
            <a onClick={e => { this.editUser(record) }}>修改</a>
            <Divider type="vertical" />
            <a onClick={e => { this.deleteUser(record) }}>删除</a>
            <Divider type="vertical" />
            <a onClick={e => { this.accreditUser(record) }}>授权</a>
          </span>
        )
      }
    }]
    return (
      <Card bordered={false}>
        <div className={styles.tableList}>
          <div className={styles.tableListForm}>
            <Search
              paramKeys={[0]}
              onSearch={this.onSearch.bind(this)}
              addNew={this.addNew.bind(this)}
              isAddUser={true}
              title={'添加员工'}
            />
          </div>
          <div style={{ height: '500px' }}>
            <Table
              rowKey={record => (record.UserId)}
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
            <div className={styles.total_item}>共400条记录</div>
          </div>
        </div>
      </Card>
    )
  }
}
export default connect()(UsersAccount)
// export default UsersAccount
