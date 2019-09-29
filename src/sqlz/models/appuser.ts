import { Model, STRING, UUID, Deferrable } from 'sequelize'
import sequelize from './_index'
import { Language } from './language'

export class AppUser extends Model {

}

export class AppUserModel {
  id: string
  name: string
  pwd: string
  createdAt: Date
  updatedAt: Date
}

AppUser.init(
  {
    email: STRING(50),
    pwd: STRING(50)
  },
  { sequelize, modelName: 'AppUser' }
)

AppUser.belongsTo(Language, {
  foreignKey: 'languageId'
})
