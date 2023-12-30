import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { IEnv } from './config/webpack/types/config'

export default (env: IEnv): webpack.Configuration => {
  const options = {
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'build')
    },
    mode: env.mode,
    get isDev() {
      return this.mode === 'development'
    },
    port: env.port || 3000
  }

  return buildWebpackConfig(options)
};