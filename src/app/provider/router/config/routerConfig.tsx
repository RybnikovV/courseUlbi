import { PathRouteProps } from 'react-router';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { routerPaths } from '@/shared/config/routerPaths/routerPaths';

const routerConfig: PathRouteProps[]= [
  {
    path: routerPaths.main,
    element: <MainPage/>,
  }, {
    path: routerPaths.about,
    element: <AboutPage/>,
  },
];

export {routerConfig};