import glob from 'glob';
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

const configs = glob.sync('src/bin/*.js').map((inputFile) => ({
  plugins: [
    preserveShebangs(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
      ignoreDynamicRequires: true,
    }),
  ],
  input: inputFile,
  output: {
    file: `${inputFile.replace('src/bin', 'bin')}`,
    format: 'cjs',
  },
  external: [
    'rollup',
  ],
}));

export default [
  {
    input: `src/index.js`,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
].concat(configs);
