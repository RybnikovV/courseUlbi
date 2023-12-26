import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlagins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');


export const buildWebpackConfig = ({paths, mode}: BuildOptions): webpack.Configuration => {
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlagins(paths),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
  }
}