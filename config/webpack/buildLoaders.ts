import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
    // use: {
    //   loader: "babel-loader",
    //   options: {
    //     presets: [
    //       '@babel/preset-env',
    //       '@babel/preset-typescript',
    //       '@babel/preset-react'
    //     ]
    //   }
    // }
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : {
        loader: MiniCssExtractPlugin.loader,
      },
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module./i,
            localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:5]' 
              : '[hash:base64:8]' 
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  const svgloader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const imgLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    scssLoader,
    svgloader,
    babelLoader,
    tsLoader,
    imgLoader
  ]
};