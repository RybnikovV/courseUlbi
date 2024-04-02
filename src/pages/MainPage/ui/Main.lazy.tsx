import { lazy } from 'react';

const MainLazy = lazy(async () => await import('./Main'));

export { MainLazy };
