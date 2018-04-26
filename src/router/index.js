import React from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
// import 'es6-promise/dist/es6-promise'
import { Provider } from 'react-redux'
import store from '@/stores'

import App from '@/containers/App'
import Main from '@/containers/Main'
import modules from './modules'

const { Login } = modules

const isPro = process.env.NODE_ENV === 'production'

const Router = isPro ? BrowserRouter : HashRouter
// const Router = HashRouter

const basename = '/'
const configs = [
  { path: '/', component: modules.Index, exact: true },
  { path: '/customer', component: modules.CustomerService },
  { path: '/customerDetail', component: modules.CustomerDeatil },
  { path: '/usersAccount', component: modules.UsersAccount },
  { path: '/usersRoles', component: modules.UsersRoles },
  { path: '/usersAddStrategy', component: modules.UsersAddStrategy }
]
const router = () => (
  <Provider store={store}>
    <Router basename={basename}>
      <App>
        <Switch>
          <Route path='/demo5' component={modules.Demo5}/>
          <Route path='/demo6' component={modules.Demo6}/>
          <Route path='/login' component={modules.Login}/>
          <Main>
            {
              configs.map((item, index) => {
                if (!item.disable) {
                  return <Route key={'router-' + index} path={item.path} component={item.component} exact={item.exact}/>
                }
              })
            }
          </Main>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
