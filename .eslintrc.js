module.exports = {
  extends: ['ash-nazg/sauron-node'],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true
  },
  overrides: [{
    files: '*.md',
    globals: {
      require: true,
      StackBlur: true,
      width: true,
      height: true,
      top_x: true,
      top_y: true,
      radius: true,
      imageData: true,
      sourceImage: true,
      targetCanvas: true,
      blurAlphaChannel: true,
    },
    rules: {
      'import/unambiguous': 0,
      'import/no-commonjs': 0,
      'node/no-missing-import': 0,
      'import/no-unresolved': ['error', {
        ignore: ['stackblur-canvas']
      }],
      'node/no-missing-require': ['error', {
        allowModules: ['stackblur-canvas'],
      }],
      'no-shadow': 0,
      'no-unused-vars': ['error', {varsIgnorePattern: 'StackBlur'}]
    }
  }],
  rules: {
    'jsdoc/require-returns': ['error', {exemptedBy: ['see']}]
  }
};
