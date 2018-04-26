import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
export default class LeftMenu extends React.Component {
  render () {
    return (
      <Menu theme="dark" mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="customer-service" /><span>客服</span></span>}>
          <Menu.Item key="1">
            <Link to="/customer">
              <span>客户</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="user" /><span>用户</span></span>}>
          <Menu.Item key="2">
            <Link to="/usersAccount">
              <span>账号</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">部门</Menu.Item>
          <Menu.Item key="4">
            <Link to="/usersRoles">
              <span>角色</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">权限策略</Menu.Item>
          <Menu.Item key="6">
            <Link to="/usersAddStrategy">
              <span>新增策略</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
