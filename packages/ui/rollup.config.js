// @ts-check
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default /** @type {import('rollup').RollupOptions} */ ({
  input: {
    index: 'src/index.ts'
  },
  output: [
    {
      dir: 'build',
      format: 'esm',
      entryFileNames: '[name].js'
    },
  ],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.tsx'] }),
    typescript(),
    babel({ babelHelpers: 'runtime', extensions: ['.ts', '.tsx'] }),
    postcss({ autoModules: true })
  ],
  external: [
    /@babel\/runtime/,
    /core-js/,
    /react/
  ]
})
