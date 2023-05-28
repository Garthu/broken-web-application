import http from '../http-common'

class Users {
  create(data) {
    const name = data.name
    const password = data.password
    const email = data.email

    return http.post(`/user?name=${name}&password=${password}&email=${email}`)
  }

  login(data) {
    const password = data.password
    const email = data.email

    return http.get(`/user/login?email=${email}&password=${password}`)
  }

  setAdmin(email) {
    return http.get(`/user/set-admin?email=${email}`)
  }
}

export default new Users();