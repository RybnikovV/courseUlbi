import './styles/index.scss';
import { AppRouter } from './provider/router';

import { useTheme } from '@/shared/config/theme';
import classNames from '@/shared/lib/classNames/classNames';

import { Navbar } from '@/widgets/Navbar';

import { Sidebar } from '@/widgets/Sidebar';
import { type FC } from 'react';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app__content-wrapper">
        <Sidebar />
        <div className="app__content">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
