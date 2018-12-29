# eslint-config-poi-plugin

[![license](https://img.shields.io/npm/l/eslint-config-poi-plugin.svg)](https://github.com/KagamiChan/eslint-config-poi-plugin/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-poi-plugin.svg)](https://www.npmjs.com/package/eslint-config-poi-plugin)
[![CircleCI](https://img.shields.io/circleci/project/github/KagamiChan/eslint-config-poi-plugin.svg)](https://circleci.com/gh/KagamiChan/eslint-config-poi-plugin)
[![David](https://img.shields.io/david/kagamichan/eslint-config-poi-plugin.svg)](https://github.com/KagamiChan/eslint-config-poi-plugin)
[![David dev](https://img.shields.io/david/dev/kagamichan/eslint-config-poi-plugin.svg)](https://github.com/KagamiChan/eslint-config-poi-plugin)
[![David peer](https://img.shields.io/david/peer/kagamichan/eslint-config-poi-plugin.svg)](https://github.com/KagamiChan/eslint-config-poi-plugin)

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [poi (the Kancolle browser)](http://poi.io) plugin development.

## Usage
```shell
npm install --save-dev eslint eslint-plugin-import eslint-config-poi-plugin
```
and then add `"extends": "poi-plugin"` in your ESLint config (the following example is for `.eslintrc.js`:

```diff .eslintrc.js
{
  extends: [
+   'poi-plugin',
  ],
}
```
