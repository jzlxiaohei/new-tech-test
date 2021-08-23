/* eslint-disable @typescript-eslint/no-var-requires */
const { isDevelopmentEnv } = require('./env-utils');

const isDevelopment = isDevelopmentEnv();

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      { runtime: 'automatic', importSource: '@emotion/react' },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@emotion',
    '@babel/plugin-transform-runtime',
    isDevelopment && require.resolve('react-refresh/babel'),
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
  ].filter(Boolean),
};
