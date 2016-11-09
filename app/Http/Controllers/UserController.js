'use strict'

const User = use("App/Model/User")

class UserController {

  * create (request, response) {
    let data = request.only('name','email')
    let user = yield User.create(data)

    response.json(user)
  }

  * show (request, response) {

  }

  * delete (request, response) {

  }

}

module.exports = UserController
