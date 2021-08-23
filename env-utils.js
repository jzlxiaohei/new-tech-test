module.exports = {
  isDevelopmentEnv() {
    return process.env.NODE_ENV === 'development';
  },
  isProductionEnv() {
    return process.env.NODE_ENV === 'production';
  },
  isTestEnv() {
    return process.env.NODE_ENV === 'test';
  },
};
