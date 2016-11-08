'use strict'

const Schema = use('Schema')

class ListsTableSchema extends Schema {

  up () {
    this.create('lists', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('user_id')
    })
  }

  down () {
    this.drop('lists')
  }

}

module.exports = ListsTableSchema
