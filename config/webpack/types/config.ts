export type BuildMode = 'production' | 'development';

export interface IPath {
  entry: string;
  output: string;
  html: string
}

export interface BuildOptions {
  mode: BuildMode;
  paths: IPath;
  isDev: Boolean;
}