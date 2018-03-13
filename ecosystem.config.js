module.exports = {
    apps: [{
      name: 'chattish_live',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-54-227-230-53.compute-1.amazonaws.com',
        key: '~/.ssh/deploy_chat.pem',
        ref: 'origin/master',
        repo: 'git@github.com:che-perez/chattish_live.git',
        path: '/home/ubuntu/chattish_live',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }