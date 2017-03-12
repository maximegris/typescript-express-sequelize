import {Express} from 'express'
import {AppUserController} from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/appUsers', AppUserController.list)
  app.post('/api/appUsers', AppUserController.create)
  app.post('/api/appUsers/login', AppUserController.login)

}