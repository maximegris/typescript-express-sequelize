import {Express} from 'express'
import {LanguagesController} from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/languages', LanguagesController.list)
  app.post('/api/languages', LanguagesController.create)

}