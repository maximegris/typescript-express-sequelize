import * as Sequelize from 'sequelize'

export interface UserAttributes {
  id?: string
  label?: string
  name?: string
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  name: string
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  const User = sequelize.define('User', {
    label: DataTypes.STRING(255),
    name: DataTypes.STRING(50)
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  })
  return User
}