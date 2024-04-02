import { Routes, Route } from 'react-router-dom';
import { type FC, Suspense } from 'react';
import { routerConfig } from '../config/routerConfig';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routerConfig.map((routerConf) => {
          return (
            <Route key={routerConf.path} element={routerConf.element} path={routerConf.path} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
