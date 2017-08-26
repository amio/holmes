const path = require('path')
const cwd = path.join(__dirname, '/holmes')

module.exports = {
  apps: [{
    name: 'holmes',
    script: 'npm',
    args: 'start',
    cwd: cwd,
    env: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: 'root',
      host: 'jins.io',
      path: '/var/www/holmes',
      repo: 'git@github.com:amio/holmes.git',
      ref: 'origin/master',
      'post-deploy': 'yarn install && yarn build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
