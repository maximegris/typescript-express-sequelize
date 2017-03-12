import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

// Import model specification from its own definition file.
import {LanguageInstance, LanguageAttributes} from './language'
import {AppUserInstance, AppUserAttributes} from './appuser'

interface DbConnection {
    Language: Sequelize.Model<LanguageInstance, LanguageAttributes>,
    AppUser: Sequelize.Model<AppUserInstance, AppUserAttributes>
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
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
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