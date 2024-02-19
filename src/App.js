import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/temp/Header.tsx';
import Footer from './components/temp/Footer.tsx';
import Main from './components/pages/Main.tsx';
import PopUp from './components/temp/PopUp.tsx';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <div className='App_cover'>
        <PopUp/>
      </div>
    </>
  );
}

export default App;
