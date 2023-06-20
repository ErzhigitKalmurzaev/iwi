import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import MovieSinglePage from './pages/movieSinglePage/MovieSinglePage';
import SelectGenrePage from './pages/selectGenrePage/selectGenrePage';
import SwitchPage from './pages/switchPage/SwitchPage';
import ProfilePage from './pages/profilePage/profilePage';
import BottomController from './components/bottomController/BottomController';

import './index.scss';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <main>
              <Suspense fallback={<BounceLoader color="#1F1B2E" />}>
                  <Routes>
                      <Route exact path='/' element={<Home/>}/>
                      <Route exact path='/watch/:id' element={<MovieSinglePage/>}/>
                      <Route exaxt path='/:type' element={<SwitchPage/>}/>
                      <Route exact path='/:type/:genre' element={<SelectGenrePage/>}/>
                      <Route exact path='/profile' element={<ProfilePage/>}/>
                  </Routes>
              </Suspense>
          </main>
          <BottomController/>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;