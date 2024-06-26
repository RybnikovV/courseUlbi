import type { Configuration as DevServerConfig } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export const buidDevServer = (options: BuildOptions): DevServerConfig => {
  return {
    port: options.port,
    // open: true
    historyApiFallback: true,
    hot: true,
  };
};
