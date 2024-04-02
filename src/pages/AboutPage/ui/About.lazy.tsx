import { lazy } from 'react';

const AboutLazy = lazy(async () => await import('./About'));

export { AboutLazy };
