'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')
Route.delete('/users/:id', 'UserController.delete')

Route.post('/users/:id/todo-list', 'TodoListController.create')
Route.get('/users/:id/todo-list', 'TodoListController.index')

Route.post('/task', 'TaskController.create')
Route.get('/task/:id', 'TaskController.index')
Route.delete('/task/:id', 'TaskController.delete')
Route.post('/task/:id', 'TaskController.update')
