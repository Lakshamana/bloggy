module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'react-app'
  ],
  plugins: ['prettier', 'react'],
  // add your custom rules here
  rules: {
    'arrow-parens': "off",
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error'
  }
}
