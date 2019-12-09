const config = require('config')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

module.exports = new MongoDBStore({
  uri: config.get('db.mongoConnectionString'),
})
