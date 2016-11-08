'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('list_id')
      table.string('title')
      table.boolean('complete')
      table.timestamps()
      table.date('due_date')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
