/* eslint-disable global-require */
const express = require('express')
const config = require('config')
const { join } = require('path')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const mongoose = require('./utils/mongoose')
const registerRoutes = require('./controllers/routes')
const logger = require('./utils/logger')
const sessionStore = require('./auth/sessions/store')


module.exports = () => {
  const app = express()
  app.use(cookieParser())

  /** Start http server */
  const server = app.listen(config.get('service.port'))

  /** Database */
  mongoose.connect(config.get('db.mongoConnectionString'), logger)

  /** Authentication/Session middleware */
  require('./auth/passport')

  app.use([
    session({
      ...config.get('auth.session'),
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
    }),
    passport.initialize(),
    passport.session(),
  ])

  /** Register controllers */
  registerRoutes(app)

  /** Client Entry point */
  app.use(express.static(join(__dirname, '../build')))
  app.route('*').get((req, res) => res.sendFile(join(__dirname, '../build/index.html')))


  /** Server Event listeners */
  server.on('listening', async () => {
    logger.info('Service started at port %s', config.get('service.port'), { env: process.env.NODE_ENV || 'dev' })
  })

  return app
}
