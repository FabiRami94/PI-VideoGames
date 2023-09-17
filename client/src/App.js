import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import DetailPage from './components/DetailPage/DetailPage'
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import FormPage from './components/FormPage/FormPage';

function App() {

  const location = useLocation();

  const [gameByName, setGameByName] = useState([]);
  
  async function onSearch (name){
    //validaciones
    if(typeof name === 'number'){return window.alert('¡You must enter a name, not a number!')}
    if(!name){return window.alert('¡You must enter a name!')};

    console.log(typeof name);

    let nameTransformed = name.toLowerCase().replaceAll(' ','-')
        console.log(nameTransformed)
        console.log(typeof nameTransformed)
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${nameTransformed}`);
            const gameName = response.data;
            console.log(gameName)
            setGameByName(oldGames => [...oldGames, gameName])
        } catch (error) {
            console.error(error);
        }
  }

  return (
    <div className="App">
      {location.pathname !== '/' ? <NavBar></NavBar> : null}
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/home' element={<HomePage 
          gameByName={gameByName} 
          onSearch={onSearch} 
          setGameByName={setGameByName}
          ></HomePage>}></Route>
        <Route path='/detail/:id' element={<DetailPage></DetailPage>}></Route>
        <Route path='/form' element={<FormPage></FormPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
