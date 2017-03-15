import { Request, Response } from 'express'
import { AppUserDao } from '../../dao/_index'

export function create(req: Request, res: Response) {

  req.checkBody('pwd', 'Password is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'A valid email is required').isEmail()

  req.getValidationResult()
    .then(function(result) {
      if (result.isEmpty()) {
        return AppUserDao.create(req.body)
          .then(appuser => res.status(201).send(appuser))
          .catch(error => res.boom.badRequest(error))
      } else {
        res.boom.badRequest('Validation errors', result.mapped())
      }
    })
}

export function login(req: Request, res: Response) {

  req.checkBody('pwd', 'Password is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'A valid email is required').isEmail()

  req.getValidationResult()
    .then(function(result) {
      if (result.isEmpty()) {
        return AppUserDao.login(req.body)
      } else {
        res.boom.badRequest('Validation errors', result.mapped())
      }
    })
    .then(appuser => res.status(200).send(appuser))
    .catch(error => res.boom.badRequest(error))
}
