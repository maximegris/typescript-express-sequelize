import { Request, Response } from 'express'
import { AppUserDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return AppUserDao
    .findAll()
    .then(appusers => res.status(200).send(appusers))
    .catch(error => res.boom.badRequest(error))
}
