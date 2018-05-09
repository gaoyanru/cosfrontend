import http from './http'

// demo
export const fetchWechatUserInfo = () => {
  return http('/api/security/login')
}
// login
export const requestLogin = (params) => {
  return http('/api/login', 'post', params)
}
// logout
export const logout = () => {
  return http('/api/security/logout')
}
// customer-service
export const fetchCustomerServiceList = (payload) => {
  return http('/api/customers', payload)
}
export const fetchCustomerServiceDetail = (id, payload) => {
  return http('api/customers/' + id, payload)
}
export const fetchCustomerServiceOrderDetail = (id, payload) => {
  return http('api/customers/' + id + '/orders', payload)
}
export const fetchOrderDetail = (id, payload) => {
  return http('api/customers/orders/' + id, payload)
}
export const fetchCustomerServiceOutworkDetail = (id, payload) => {
  return http('api/customers/' + id + '/maintasks', payload)
}
export const fetchOutworkDetail = (id, payload) => {
  return http('api/customers/' + id + '/outertasksub', payload)
}
export const fetchAgentDetail = (id) => {
  return http('api/customers/' + id + '/accountant')
}
// getAllDepartments
export const getAllDepartments = () => {
  return http('/api/departmentscenter')
}
export const fetchUsersAccount = (payload) => {
  return http('/api/users', payload)
}
// 数据管理
export const fetchAgentServiceData = (id) => {
  return http('api/tally/getheadinfo/' + id)
}
export const fetchAgentServiceList = (id) => {
  return http('api/tally/' + id)
}
export const fetchOperateList = (id) => {
  return http('api/customer/rz/' + id)
}

export const fetchGetmainitemList = () => {
  return http('api/orders/getmainitemlist')
}

export const fetchDataEditOrderItem = (id) => {
  return http(`/api/orders/detailswithcontract/${id}`)
}
