/**
 * Babel works across all browsers, however it requires many polyfills.
 */

import 'core-js/es6/weak-map';
import 'core-js/es6/weak-set';
import 'core-js/es6/number';
import 'core-js/es6/string';
import 'core-js/es6/array';
import 'core-js/modules/es6.object.set-prototype-of';

import {transform} from '@babel/standalone';

const presets = [
  '@babel/preset-env',
  '@babel/preset-flow',
  '@babel/preset-react',
];

const plugins = [
  // formerly babel-preset-stage-3
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', {loose: false}],
  '@babel/plugin-proposal-json-strings',
];

export function compile(raw) {
  return transform(raw, {presets}).code;
}
