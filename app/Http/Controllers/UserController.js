'use strict'

const User = use("App/Model/User")

class UserController {

  * create (request, response) {
    let data = request.only('name','email')
    //resquest.only to create and edit something
    let user = yield User.create(data)

    response.json(user)
  }

  * show (request, response) {
    let userId = request.peram('id')
    //request.peram to look stuff up
    let user = yield User.find(userId)

    if (user) {
      response.json(user)
    } else {
      response.status(404)
      response.json({ error: "No such user" })
    }
  }

  * delete (request, response) {

  }

}

module.exports = UserController
