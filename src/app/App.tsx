import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { useTheme } from '@/shared/config/theme'
import classNames from  '@/shared/lib/classNames/classNames';

const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={changeTheme}>toggleTheme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App