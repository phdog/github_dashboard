module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-irregular-whitespace': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': ['warning']
  }
}
