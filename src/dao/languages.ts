import * as uuid from 'uuid'
import { Language } from './../sqlz/models/language'

export function create(language: any): Promise<any> {
  return Language
    .create({
      id: uuid.v1(),
      label: language.label,
      name: language.name
    })
}

export function findAll(): Promise<any> {
  return Language
    .findAll()
}
