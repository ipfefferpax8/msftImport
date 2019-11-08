NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  LOG_LEVEL: 'info',
  PORT: process.env.PORT || 3002,
  NODE_ENV,
  isProd() {
    return NODE_ENV === 'production';
  },
};