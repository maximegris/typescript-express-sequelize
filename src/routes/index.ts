import * as winston from 'winston'
import {Express, Request, Response} from 'express'
import {UsersController} from '../controllers/index'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations des routes')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
      message: 'server is running!'
  }))

  app.post('/api/users', UsersController.create)

  app.get('*', (req: Request, res: Response) => res.status(200).send({
      message: 'Nothing here...'
  }))
}
