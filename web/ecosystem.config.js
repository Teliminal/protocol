module.exports = {
  apps: [
    {
      name: 'teliminal',
      script: 'node_modules/.bin/next',
      args: 'start -p 3010',
      cwd: '/var/www/teliminal/web',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3010,
      },
    },
  ],
}
