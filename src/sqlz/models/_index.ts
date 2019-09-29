import { Sequelize } from 'sequelize'

const config = require('../config/config.json')

const dbConfig = config[process.env.NODE_ENV]
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

export default sequelize
