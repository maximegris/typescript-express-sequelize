import * as Sequelize from 'sequelize'

export interface LanguageAttributes {
  id?: string
  label?: string
  name?: string
}

export interface LanguageInstance extends Sequelize.Instance<LanguageAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  name: string
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const Language = sequelize.define('Language', {
    label: DataTypes.STRING(255),
    name: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {
          Language.hasMany(models.AppUser, {
            foreignKey: 'languageId',
            as: 'appUsers'
          })
        }
      }
    })
  return Language
}
