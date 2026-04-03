import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
      input: 'built/main.js',
      output: {
              dir: 'dist',
              format: 'cjs',
              exports: 'named'
            },
      plugins: [
        resolve(),
        commonjs({
          ignoreGlobal: false,
          ignore: ["conditional-runtime-dependency"],
        })
      ]
};