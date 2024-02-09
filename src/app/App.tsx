import { Link } from 'react-router-dom';
import './styles/index.scss';
import { AppRouter } from './provider/router';

import { useTheme } from '@/shared/config/theme';
import classNames from  '@/shared/lib/classNames/classNames';

const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={changeTheme}>toggleTheme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <AppRouter/>
    </div>
  )
}

export default App