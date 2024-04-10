import { lazy } from 'react';

const AboutLazy = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 2000);
  });
  return await import('./About');
});

export { AboutLazy };
