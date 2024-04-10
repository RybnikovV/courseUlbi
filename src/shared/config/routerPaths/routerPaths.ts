import { type PathRouteProps } from 'react-router';

interface ICustomPathRouteProps extends PathRouteProps {
  name: string;
  path: string;
}

export enum RouterKeys {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'not-found',
}

export const routerPaths: Record<RouterKeys, ICustomPathRouteProps> = {
  [RouterKeys.MAIN]: {
    path: '/',
    name: 'главная',
  },
  [RouterKeys.ABOUT]: {
    path: '/about',
    name: 'о нас',
  },
  [RouterKeys.NOTFOUND]: {
    path: '*',
    name: '',
  },
};
