import './styles/index.scss';
import { AppRouter } from './provider/router';

import { useTheme } from '@/shared/config/theme';
import classNames from  '@/shared/lib/classNames/classNames';

import { Navbar } from '@/widgets/Navbar';

const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar changeTheme={changeTheme}/>
      <AppRouter/>
    </div>
  )
}

export default App