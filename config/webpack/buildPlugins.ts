import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IPath } from './types/config';

export const buildPlagins = ({html}: IPath): webpack.WebpackPluginInstance[]  => {
  return [
    new HtmlWebpackPlugin({
      template: html
    }),
    new webpack.ProgressPlugin(),
  ]
};