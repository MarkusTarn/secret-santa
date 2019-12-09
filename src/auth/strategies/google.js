const config = require('config')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../../models/User')

module.exports = new GoogleStrategy({
  clientID: config.get('auth.google.clientId'),
  clientSecret: config.get('auth.google.secret'),
  callbackURL: config.get('auth.google.callback'),
}, (accessToken, refreshToken, profile, cb) => {
  User.findOneAndUpdate({ googleId: profile.id }, {
    googleId: profile.id,
    name: profile._json.name,
    avatarUrl: profile._json.picture,
  }, { upsert: true, new: true, runValidators: true }, cb)
})
