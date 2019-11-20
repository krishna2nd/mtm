module.exports = {
  apps: [{
    name: "MTM Server",
    script: "dist/index.js",
    watch: false,
    instances: "max",
    autorestart: true,
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
      path: '/home/site/wwwroot',
      'post-deploy': 'yarn start'
    }
  }
};