import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { AppUserInstance } from './../sqlz/models/appuser'

export function create(appUser: AppUserInstance): Promise<any> {

  return db.Language.findOne({
    where: { name: 'fr' }
  })
    .then(language => {
      return db.AppUser
        .create({
          id: uuid.v1(),
          email: appUser.email,
          pwd: appUser.pwd,
          languageId: language.get('id')
        })
    })
}

export function findAll(): Promise<any> {
  return db.AppUser
    .findAll({ include: [{ all: true }] })
}

export function login(appUser: AppUserInstance): Promise<any> {
  return db.AppUser
    .findOne({
      where: {
        email: appUser.email,
        pwd: appUser.pwd
      },
      include: [db.Language]
    })
}
