const passport = require('passport')
const UsersController = require('./users/UsersController')
const isAuthenticated = require('../auth/helpers/isAuthenticated')

module.exports = (app) => {
  /**
   * Authentication
   */
  app.route('/api/auth/google').get(passport.authenticate('google', { scope: ['profile'] }))
  app.route('/api/auth/google/callback').get(passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' }))

  app.route('/api/users/me').delete(isAuthenticated, UsersController.logout)
  app.route('/api/users/me').get(isAuthenticated, UsersController.getMe)

  app.route('/api/users/all').get(isAuthenticated, UsersController.get)
  app.route('/api/users/assign').get(UsersController.assign)
}
