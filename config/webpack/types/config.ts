export type BuildMode = 'production' | 'development';

export interface IPath {
  entry: string;
  output: string;
  html: string;
  baseModule: string;
  nodeModule: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: IPath;
  port: number;
  isDev: Boolean;
}

export interface IEnv {
  mode: BuildMode,
  port?: number
}