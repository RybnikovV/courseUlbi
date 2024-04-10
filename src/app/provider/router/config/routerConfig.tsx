import { type PathRouteProps } from 'react-router';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { routerPaths } from '@/shared/config/routerPaths/routerPaths';
import { NotFoundPage } from '@/pages/NotFoundPage';

const routerConfig: PathRouteProps[] = [
  {
    ...routerPaths.main,
    element: <MainPage />,
  },
  {
    ...routerPaths.about,
    element: <AboutPage />,
  },
  {
    ...routerPaths['not-found'],
    element: <NotFoundPage />,
  },
];

export { routerConfig };
