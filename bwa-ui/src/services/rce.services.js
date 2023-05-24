import http from '../http-common'

class RCEDataService {
  get(filepath) {
    return http.get(`/rce?filename=${filepath}`)
  }
}

export default new RCEDataService();