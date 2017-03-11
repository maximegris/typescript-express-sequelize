import * as winston from 'winston'
import {Request, Response} from 'express'
import * as uuid from 'uuid'
import db from '../sqlz/models/index'

export function create(req: Request, res: Response) {
  console.log(req.body)
  return db.User
    .create({
      id: uuid.v1(),
      label: req.body.label,
      name: req.body.name,
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error))
}