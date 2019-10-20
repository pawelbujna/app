class routes {
  static mainPath = 'http://localhost:5000'

  static get users() {
    return routes.mainPath + '/users'
  }
}

export default routes
