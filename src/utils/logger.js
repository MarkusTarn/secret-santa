const config = require('config').logger
const winston = require('winston')


const filename = 'logs/service.log'
const transports = []

if (config.console.enabled) {
  transports.push(new winston.transports.Console({
    level: config.console.level,
    prettyPrint: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
  }))
}

if (config.file.enabled) {
  transports.push(new winston.transports.File({
    filename,
    level: config.file.level,
  }))
}


const logger = winston.createLogger({
  level: 'info',
  silent: process.env.NODE_ENV === 'test',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports,
})

module.exports = logger
