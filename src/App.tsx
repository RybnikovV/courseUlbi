import { Route, Routes, Link } from 'react-router-dom';
import "./styles/index.scss";
import MainLazy from './pages/MainPage/MainLazy';
import AboutLazy from './pages/AboutPage/AboutLazy';
import { Suspense } from 'react';
import useTheme from './theme/useTheme';

const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={changeTheme}>toggleTheme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainLazy/>}/>
          <Route path='/about' element={<AboutLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App