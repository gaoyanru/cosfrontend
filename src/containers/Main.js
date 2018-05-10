import React from 'react'
import styles from '@/stylus/main'
import { Layout, Menu, Icon, Dropdown, Avatar, Breadcrumb } from 'antd'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ClassNames from 'classnames'
import PageHeader from '@/components/common/PageHeader'
import GlobalHeader from '@/components/common/GlobalHeader'
import LeftMenu from '@/components/common/LeftMenu'
import { fetcUserInfoAction } from '@/actions/common'
const { Header, Sider, Content } = Layout

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
      isShowThirdMenu: false
    }
    this.handleMenuCollapse = this.handleMenuCollapse.bind(this)
  }
  componentWillMount () {
    this.props.dispatch(fetcUserInfoAction((userInfo) => {
      if (!userInfo) {
        this.props.history.push('/login')
      }
    }))
  }
  componentWillReceiveProps (props) {
    if (props.loginStat === 'out') {
      this.props.history.push('/login')
    }
  }
  handleMenuCollapse () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} trigger={['click']}>
        <Menu.Item><Link to="/main/user_my"><Icon type="user" />个人中心</Link></Menu.Item>
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    )
    let RealName = ''
    try {
      RealName = JSON.parse(sessionStorage.getItem('userInfo'))
    } catch (e) {
      console.log(e)
    }
    const currentUser = {
      RealName
    }
    let menuList = {
      menuParent: '数据管理',
      children: '数据修改',
      child: '详情'
    }
    if (this.props.location.pathname === '/customer') {
      menuList.menuParent = '客服中心'
      menuList.children = '客户'
      menuList.child = ''
    }
    if (this.props.location.pathname === '/datamanagement') {
      menuList.menuParent = '数据管理'
      menuList.children = '数据修改'
      menuList.child = ''
    }
    if (this.props.location.pathname === '/customerDetail') {
      menuList.menuParent = '客服中心'
      menuList.children = '客户'
      menuList.child = '详情'
    }
    if (this.props.loginStat === 'out') {
      return null
    }
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={180}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Link to="/">
            </Link>
          </div>
          <LeftMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader
              collapsed={this.state.collapsed}
              onCollapse={this.handleMenuCollapse}
            />
          </Header>
          <PageHeader menu={menuList} isShowThirdMenu={this.state.isShowThirdMenu}/>
          <Content style={{ height: '100%' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default connect((state) => {
  return {
    ...state.common
  }
})(withRouter(Main))
