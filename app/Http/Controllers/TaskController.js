'use strict'

const Task = use("App/Model/Task")

class TaskController {

  * create (request, response) {
    let todoId = request.param('id')
    let data = request.only('title', 'due_date', 'complete', 'list_id')
    // data.due_date = new Date(data.due_date)

    let todoTask = yield Task.create(data)
    response.status(201).json(todoTask)
  }

  * index (request, response) {
    let todoId = request.param('id')
    let task = yield Task.query().where('list_id', todoId)

    response.json(task)
  }

  * delete (request, response) {
    let taskId = request.param('id')
    let removeTask = yield Task.findBy('id', taskId)
    yield removeTask.delete()

    response.json(removeTask)
  }

  * update (request, response) {
    let taskId = request.param('id')
    console.log(taskId);
    let updateTask = yield Task.findBy('id', taskId)
    updateTask.fill(request.only('title', 'complete'))
    yield updateTask.save()

    response.json(updateTask)
  }

  * show (request, response) {

  }

}

module.exports = TaskController
