import { ResolveOptions } from 'webpack';
import { IPath } from './types/config';

export const buildResolves = ({baseModule, nodeModule}: IPath): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': baseModule,
      '': nodeModule,
    },
    mainFiles: ['index']
  }
};