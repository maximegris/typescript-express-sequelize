import * as express from 'express'
import * as winston from 'winston'
import {json, urlencoded} from 'body-parser'
import * as morgan from 'morgan'
import {Express} from 'express'
import * as routes from './routes/index'

const PORT: number = 3000

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

    private app: Express

    constructor() {
        this.app = express()


        this.app.use(urlencoded({
            extended: true
        }))
        this.app.use(json())
        this.app.use(morgan('combined'))
        this.app.listen(PORT, () => {
            winston.log('info', '--> Server successfully started at port %d', PORT)
        })
        routes.initRoutes(this.app)
    }

    getApp() {
        return this.app
    }
}
new Server()
