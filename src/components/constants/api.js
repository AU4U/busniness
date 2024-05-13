import axios from 'axios'

axios.defaults.timeout = 30000

axios.defaults.post = {
  'Content-Type': 'application/json;multipart/form-data;'
}

axios.defaults.baseURL = '/api'

export const getProject = () => {
  return axios.get('http://211.159.163.225:8082/businessManage/projects')
}

export const creatProject = (params) => {
  return axios.post('http://211.159.163.225:8082/businessManage/projects', params)
}

export const updateProject = (params) => {
  return axios.patch('http://211.159.163.225:8082/businessManage/projects', params)
}

export const getClients = () => {
  return axios.get('http://211.159.163.225:8082/businessManage/clients')
}

export const creatClients = (params) => {
  return axios.post('http://211.159.163.225:8082/businessManage/clients', params)
}

export const updateClients = (params) => {
  return axios.patch('http://211.159.163.225:8082/businessManage/clients', params)
}