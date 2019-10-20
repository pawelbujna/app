import axios from 'axios'

class httpApi {
  static get(url) {
    return axios.get(url)
  }

  static post(url, body) {
    return axios.post(url, body)
  }
}

export default httpApi
