import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildOptions } from './config/webpack/types/config';

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const buildConfig: BuildOptions = {
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build')
  },
  mode: 'production',
  get isDev() {
    return this.mode === 'development'
  },
}

export default buildWebpackConfig(buildConfig);