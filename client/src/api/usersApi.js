import config from 'api/config'

class usersApi {
  static usersApiUrl = '/users/'

  static get get() {
    return config.mainPath + this.usersApiUrl
  }

  static get getAll() {
    return config.mainPath + this.usersApiUrl
  }

  static get add() {
    return config.mainPath + this.usersApiUrl + '/add/'
  }

  static get save() {
    return config.mainPath + this.usersApiUrl + '/save/'
  }
}

export default usersApi
