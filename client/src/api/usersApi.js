import config from 'api/config'

class usersApi {
  usersApiUrl = '/users'

  static get get() {
    return config.mainPath + this.usersApiRul
  }

  static get add() {
    return config.mainPath + this.usersApiRul + '/add'
  }
}

export default usersApi
