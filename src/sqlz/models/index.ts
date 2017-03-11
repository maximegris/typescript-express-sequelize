import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

// Import model specification from its own definition file.
import {UserInstance, UserAttributes} from './user'

interface DbConnection {
  User: Sequelize.Model<UserInstance, UserAttributes>
}
let db = {}

// I use the node-config package to manage the DB config you can choose
// to stick with the original version. And I removed environment variable
// support because I don't need it.
const dbConfig = config['development']
const sequelize = new Sequelize(
    dbConfig['database'],
    dbConfig['username'],
    dbConfig['password'],
    dbConfig
)

const basename  = path.basename(module.filename)
fs
.readdirSync(__dirname)
.filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
})
.forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model['name']] = model
})

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize

export default <DbConnection>db