/* eslint-env node */

import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

/**
 * @external RollupConfig
 * @type {PlainObject}
 * @see {@link https://rollupjs.org/guide/en#big-list-of-options}
 */

/**
 * @param {PlainObject} [config={}]
 * @param {boolean} [config.minifying]
 * @param {string} [config.format='umd']
 * @returns {external:RollupConfig}
 */
function getRollupObject ({minifying, format = 'umd'} = {}) {
  const nonMinified = {
    input: 'src/stackblur.js',
    output: {
      format,
      sourcemap: minifying,
      file: `dist/stackblur${format === 'es'
        ? '-' + format
        : ''}${minifying ? '.min' : ''}.js`,
      name: 'StackBlur'
    },
    plugins: [
      babel()
    ]
  };
  if (minifying) {
    nonMinified.plugins.push(terser());
  }
  return nonMinified;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  getRollupObject({minifying: false, format: 'umd'}),
  getRollupObject({minifying: false, format: 'es'}),
  getRollupObject({minifying: true, format: 'umd'}),
  getRollupObject({minifying: true, format: 'es'})
];
