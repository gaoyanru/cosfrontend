import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
export default class LeftMenu extends React.Component {
  render () {
    let userInfo = {}
    try {
      userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    } catch (e) {
      console.log(e)
    }

    return (
      <Menu theme="dark" mode="inline">
        {
          (userInfo === 'kefu') &&
          <SubMenu key="sub1" title={<span><Icon type="customer-service" /><span>客服中心</span></span>}>
            <Menu.Item key="1">
              <Link to="/customer">
                <span>客户</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        }
        {
          (userInfo === 'dm') &&
          <SubMenu key="sub3" title={<span><Icon type="edit" /><span>数据管理</span></span>}>
            <Menu.Item key="3">
              <Link to="/datamanagement">
                <span>数据修改</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        }
        {/* <SubMenu key="sub2" title={<span><Icon type="user" /><span>用户</span></span>}>
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
        </SubMenu> */}
      </Menu>
    )
  }
}
