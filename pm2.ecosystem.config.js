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
  }]
};