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
export const fetchOrderDetail = (id) => {
  return http('api/customers/orders/' + id)
}
export const fetchCustomerServiceOutworkDetail = (id, payload) => {
  return http('api/customers/' + id + '/maintasks', payload)
}
export const fetchOutworkDetail = (id) => {
  return http('api/customers/' + id + '/outertasksub')
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
