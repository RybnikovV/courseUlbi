import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IPath } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const buildPlagins = ({html}: IPath, isDev: boolean): webpack.WebpackPluginInstance[]  => {
  return [
    new HtmlWebpackPlugin({
      template: html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new ReactRefreshWebpackPlugin()
  ]
};