import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default /** @type {import('rollup').RollupOptions} */ ({
  input: {
    index: 'src/index.ts',
    'components/Button': './src/components/Button.tsx',
    'components/Card': './src/components/Card.tsx',
    'components/GlobalStyle': './src/components/GlobalStyle.tsx',
    'components/Heading': './src/components/Heading.tsx',
    'components/Input': './src/components/Input.tsx',
    'components/InputRadio': './src/components/InputRadio.tsx',
    'components/InputText': './src/components/InputText.tsx',
    'components/Text': './src/components/Text.tsx'
  },
  output: [
    {
      dir: 'build',
      format: 'esm',
      entryFileNames: '[name].js'
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve({ extensions: ['.ts', '.tsx'] }),
    typescript(),
    babel({ babelHelpers: 'runtime', extensions: ['.ts', '.tsx'] }),
    postcss({ autoModules: true })
  ],
  external: [
    /@babel\/runtime/,
    /core-js/,
    /react/,
    /classnames/,
    /normalize\.css/
  ]
})
