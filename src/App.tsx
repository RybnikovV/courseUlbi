import { Outlet, Route, Routes, Link } from 'react-router-dom';
import "./app.scss";
import About from './pages/AboutPage/About';
import Main from './pages/MainPage/Main';
import MainLazy from './pages/MainPage/MainLazy';
import AboutLazy from './pages/AboutPage/AboutLazy';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className='app'>
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