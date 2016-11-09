'use strict'

const TodoList = use("App/Model/TodoList")

class TodoListController {

  * example (request, response) {
    response.json({ message: "Hello World" })
  }

  * create (request, response) {
    let userId = request.peram('id')
    let data = request.only('name')
    data.user_id = userId

    let todoList = yield TodoList.create(data)
    response.status(201).json(todoList)
  }

  * index (request, response) {
    let userId = request.peram('id')
    let lists = yield TodoList.query().where('user_id, userId')

    response.json(lists)
  }

}

module.exports = TodoListController
