# eslint-config-poi-plugin

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [poi (the Kancolle browser)](http://poi.io) plugin development.

## Usage
```shell
npm install --save-dev eslint eslint-plugin-import eslint-config-plugin
```
and then add `"extends": "poi-plugin"` in your ESLint config (the following example is for `.eslintrc.js`:

```diff .eslintrc.js
{
  extends: [
+   'poi-plugin',
  ],
}
```
