import http from '../http-common'

class RelativeDataService {
  get(filepath) {
    return http.get(`/relative?filename=${filepath}`)
  }
}

export default new RelativeDataService();