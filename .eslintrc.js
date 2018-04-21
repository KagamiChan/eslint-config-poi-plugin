module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
  }
}
