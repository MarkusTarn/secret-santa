const pckg = require('./package.json')

module.exports = {
  apps: [{
    name: pckg.name,
    script: pckg.main,
    watch: true,
    ignore_watch: ['.git', 'node_modules', 'node_modules/cache', 'logs', 'build', 'coverage', 'src/client'],
  },
  {
    name: `${pckg.name}-client`,
    script: 'yarn build:dev --watch',
    watch: ['config/webpack.config.js'],
    // ignore_watch: ['*', '!config/webpack.config.js'],
  }],
}
