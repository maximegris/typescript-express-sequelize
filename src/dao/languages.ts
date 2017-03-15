import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { LanguageInstance } from './../sqlz/models/language'

export function create(language: LanguageInstance): Promise<any> {
  return db.Language
    .create({
      id: uuid.v1(),
      label: language.label,
      name: language.name
    })
}

export function findAll(): Promise<any> {
  return db.Language
    .findAll()
}
