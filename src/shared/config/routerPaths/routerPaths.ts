import { PathRouteProps } from 'react-router';

interface ICustomPathRouteProps extends PathRouteProps {
  children: string
}

export enum RouterKeys {
  MAIN = 'main',
  ABOUT = 'about',
};

export const routerPaths: Record<RouterKeys, ICustomPathRouteProps> = {
  [RouterKeys.MAIN]: {
    path: '/',
    children: 'главная'
  },
  [RouterKeys.ABOUT]: {
    path: '/about',
    children: 'о нас'
  },
};
