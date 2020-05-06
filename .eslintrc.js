module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'flowtype',
    'jest',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-fragments': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
    'react/jsx-curly-newline': ['off'],
    'react/default-props-match-prop-types': ['off']
  },
};
