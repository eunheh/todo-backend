'use strict'

const Schema = use('Schema')

class AddAvatarTableSchema extends Schema {

  up () {
    this.table('users', (table) => {
       table.string('avatar_url')
    })
  }

  down () {
    this.table('add_avatar', (table) => {
       table.dropColumn('avatar_url')
    })
  }

}

module.exports = AddAvatarTableSchema
