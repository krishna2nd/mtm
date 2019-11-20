module.exports = {
  apps: [{
    name: "MTM Server",
    script: "dist/index.js",
    instances: "max",
    autorestart: true,
    exec_mode : "cluster",
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '0.0.0.0',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/home/site',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production'
    }
  }
};