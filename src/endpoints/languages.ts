import {Request, Response} from 'express'
import {LanguagesDao} from '../dao/_index'

export function create(req: Request, res: Response) {
  return LanguagesDao.create(req.body)
    .then(language => res.status(201).send(language))
    .catch(error => res.boom.badRequest(error))
}

export function list(req: Request, res: Response) {
  return LanguagesDao
    .findAll()
    .then(languages => res.status(200).send(languages))
    .catch(error => res.boom.badRequest(error))
}