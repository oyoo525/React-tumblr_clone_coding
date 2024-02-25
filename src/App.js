import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/temp/Header_Footer/Header.tsx';
import Footer from './components/temp/Header_Footer/Footer.tsx';
import PopUp from './components/temp/Header_Footer/PopUp.tsx';

import Topics from './components/pages/Topics.tsx';
import { useState } from 'react';
import Dashboard from './components/pages/Dashboard.tsx';
import Explore from './components/pages/Explore.tsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <>
      <div className="App">
        <BrowserRouter>
          {!isLogin && <PopUp setIsLogin={setIsLogin} />}
          <Header isLogin={isLogin} setIsLogin={setIsLogin} />
          <Routes>
            <Route path='/' element={<Explore isLogin={isLogin} />} />
            <Route path='/explore' element={<Explore isLogin={isLogin} />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/dashboard' element={<Dashboard isLogin={isLogin} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
