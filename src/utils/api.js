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
// getAllDepartments
export const getAllDepartments = () => {
  return http('/api/departmentscenter')
}
export const fetchUsersAccount = (payload) => {
  return http('/api/users', payload)
}
