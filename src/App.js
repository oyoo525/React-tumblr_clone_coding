import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/temp/Header_Footer/Header.tsx';
import Footer from './components/temp/Header_Footer/Footer.tsx';
import Main from './components/pages/Main.tsx';
import PopUp from './components/temp/Header_Footer/PopUp.tsx';
import StaffPicks from './components/pages/StaffPicks.tsx';
import AnswerTime from './components/pages/AnswerTime.tsx';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <PopUp/>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/trending' element={<Main />} />
            <Route path='/staff-picks' element={<StaffPicks />} />
            <Route path='/answertime' element={<AnswerTime />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
