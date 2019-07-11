import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import builtins from 'rollup-plugin-node-builtins'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/assetsLoader.js', name: 'assetsLoader', format: 'umd' },
    { file: 'dist/assetsLoader.min.js', name: 'assetsLoader', format: 'umd' },
    { file: 'dist/assetsLoader.common.js', name: 'assetsLoader', format: 'cjs' },
    { file: 'dist/assetsLoader.esm.js', format: 'es' }
  ],
  plugins: [
    json(),
    builtins(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    resolve(),
    terser({
      sourcemap: false,
      include: [/^.+\.min\.js$/]
    })
  ]
}
