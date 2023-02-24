module.exports = {
    extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
    parserOptions: {
      project: './tsconfig.json',
    },
    env: {
      browser: true,
      es6: true,
    },
    rules: {},
  };
  