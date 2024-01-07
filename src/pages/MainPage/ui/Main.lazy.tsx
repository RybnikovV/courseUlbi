import { lazy } from 'react';

const MainLazy = lazy(() => import('./Main'));

export {MainLazy};