import axios from '../utils/axios'
import qs from 'qs' // post请求转码
import store from './index'

const http = {
  get: function (url, requestJson, config) {
    return new Promise((resolve, reject) => {
      axios.get(url, Object.assign({params: requestJson}, config)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post: function (url, requestJson, config) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(Object.assign(requestJson, config))).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put: function (url, requestJson, config) {
    return new Promise((resolve, reject) => {
      axios.put(url, qs.stringify(Object.assign(requestJson, config))).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete: function (url, requestJson, config) {
    return new Promise((resolve, reject) => {
      axios.delete(url, Object.assign({params: requestJson}, config)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default {
  // axios
  // get
  axios_load_navbar ({commit}, requestData = {}) {
    return http.get('sysadmin/auth/pageIndex', requestData)
  },
  axios_get_menu ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysMenu/menuList', requestData)
  },
  axios_edit_menu ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysMenu/update', requestData)
  },
  axios_add_menu ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysMenu/insert', requestData)
  },
  axios_del_menu ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysMenu/delete', requestData)
  },
  axios_get_user ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysUser/userList', requestData)
  },
  axios_add_user ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysUser/insert', requestData)
  },
  axios_edit_user ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysUser/update', requestData)
  },
  axios_del_user ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysUser/delete', requestData)
  },
  axios_get_role ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysRole/roleList', requestData)
  },
  axios_add_role ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysRole/insert', requestData)
  },
  axios_edit_role ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysRole/update', requestData)
  },
  axios_del_role ({commit}, requestData = {}) {
    return http.post('sysadmin/media/sysRole/delete', requestData)
  },
  axios_me ({commit}, requestData = {}) {
    let source = axios.CancelToken.source()
    store.commit('axiosCancel_setter', {
      me: source
    })
    return new Promise((resolve, reject) => {
      http.post('/api/v1/members/me.json', requestData, {
        cancelToken: source.token
      }).then(res => {
        if (res.data && +res.data.error === 0) {
          commit('userInfo_setter', res.data.member)
        } else {
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

}
