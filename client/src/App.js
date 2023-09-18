import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage'
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import FormPage from './components/FormPage/FormPage';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' ? <NavBar></NavBar> : null}
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/detail/:id' element={<DetailPage></DetailPage>}></Route>
        <Route path='/form' element={<FormPage></FormPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
