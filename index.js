const supportedExtensions = ['.js', '.jsx', '.es', 'mjs', '.ts', '.tsx', '.d.ts']

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'import',
  ],
  globals: {
    window: false,
    // to allow directly accessing config
    config: false,
  },
  rules: {
    // to make code like `import'views/env'` valid
    'import/no-unresolved': ['error', { ignore: ['views/.*'] }],
  },
  settings: {
    'import/extensions': supportedExtensions,
    'import/resolver': {
      node: {
        extensions: supportedExtensions,
      },
    },
    // poi will modify require paths so that plugins could use poi's dependencies
    'import/core-modules': [
      'electron',
      // following are generated from poi package.json's dependencies
      '@babel/core',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-decorators',
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-function-bind',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-pipeline-operator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      '@babel/register',
      '@blueprintjs/core',
      '@blueprintjs/datetime',
      '@blueprintjs/select',
      '@exponent/electron-cookies',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
      '@sentry/electron',
      '@skagami/react-fontawesome',
      'babel-plugin-add-module-exports',
      'babel-plugin-dynamic-import-node',
      'babel-plugin-styled-components',
      'bindings',
      'bluebird',
      'chalk',
      'classnames',
      'coffee-react',
      'coffee-script',
      'create-react-class',
      'cson',
      'electron-devtools-installer',
      'electron-log',
      'electron-react-titlebar',
      'electron-updater',
      'fast-memoize',
      'font-awesome',
      'fs-extra',
      'fuse.js',
      'glob',
      'header-case-normalizer',
      'http-proxy-agent',
      'i18n-2',
      'i18next',
      'immutable',
      'json-format',
      'lodash',
      'memoize-one',
      'mime',
      'moment-timezone',
      'mousetrap',
      'node-fetch',
      'npm',
      'npm-package-arg',
      'os-name',
      'pac-proxy-agent',
      'pangu',
      'path-extra',
      'poi-asset-contributor-data',
      'poi-asset-themes',
      'poi-lib-battle',
      'polished',
      'prop-types',
      'react',
      'react-bootstrap',
      'react-dom',
      'react-file-dropzone',
      'react-fontawesome',
      'react-grid-layout',
      'react-i18next',
      'react-redux',
      'react-remarkable',
      'react-resizable-area',
      'react-ultimate-pagination',
      'react-virtualized',
      'react-virtualized-auto-sizer',
      'react-window',
      'reduce-reducers',
      'redux',
      'redux-observers',
      'redux-thunk',
      'request',
      'reselect',
      'semver',
      'socks5-client',
      'styled-components',
      'swf-extract',
      'wanakana',
      'yargs',
    ],
  },
}
