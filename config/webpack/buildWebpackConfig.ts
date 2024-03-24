import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlagins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { buidDevServer } from './buildDevServer';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {
    mode,
    paths,
    isDev,
  } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlagins(paths, isDev),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(paths),
    devServer: isDev ? buidDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}