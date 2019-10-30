import config from 'api/config'
import httpApi from 'helpers/httpApi'

class usersApi {
  static usersApiUrl = '/users/'

  static async get(id) {
    try {
      const res = await httpApi.get(config.mainPath + this.usersApiUrl + id)
      return res
    } catch (error) {
      return error
    }
  }

  static async getAll() {
    try {
      const res = await httpApi.get(config.mainPath + this.usersApiUrl)
      return res
    } catch (error) {
      return error
    }
  }

  static async add(user) {
    try {
      const res = await httpApi.post(config.mainPath + this.usersApiUrl + '/add/', user)
      return res
    } catch (error) {
      return error
    }
  }

  static async save(user) {
    try {
      const res = await httpApi.post(config.mainPath + this.usersApiUrl + '/save/', user)
      return res
    } catch (error) {
      return error
    }
  }
}

export default usersApi
