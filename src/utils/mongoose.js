const mongoose = require('mongoose')

function connect(conString, logger) {
  mongoose.connection.on('error', logger.error.bind(logger, 'DB connection error:'))

  mongoose.connect(conString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  }, () => {
    logger.info('Connected to MongoDB')
  })
}

module.exports = {
  connect,
}
