import type webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { type IEnv } from './config/webpack/types/config';

export default (env: IEnv): webpack.Configuration => {
  const options = {
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'build'),
      baseModule: path.resolve(__dirname, 'src'),
      nodeModule: path.resolve(__dirname, 'node_modules'),
    },
    mode: env.mode,
    get isDev() {
      return this.mode === 'development';
    },
    port: env.port ?? 3000,
  };

  return buildWebpackConfig(options);
};
