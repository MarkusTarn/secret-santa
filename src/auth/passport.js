const passport = require('passport')
const GoogleStrategy = require('./strategies/google')
const User = require('../models/User')

passport.serializeUser((user, done) => done(null, user._id))

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user))
})

/** Strategies */
passport.use(GoogleStrategy)
