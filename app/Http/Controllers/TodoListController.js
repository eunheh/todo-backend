'use strict'

const List = use("App/Model/List")

class TodoListController {

  * create (request, response) {
    let userId = request.param('id')
    let data = request.only('name')
    data.user_id = userId

    let todoList = yield List.create(data)
    response.status(201).json(todoList)
  }

  * index (request, response) {
    let userId = request.param('id')
    let getList = yield List.query().where('user_id', userId)

    response.json(getList)
  }

}

module.exports = TodoListController
