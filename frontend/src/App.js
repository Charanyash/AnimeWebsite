import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import TopAnime from './Components/TopAnime'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Signup/>} />
        <Route exact path = "/home"  element={ < Home />} />
        <Route exact path="/login" element={ < Login />} />
        <Route exact path = "/topanime" element = {<TopAnime/>}/>
      </Routes>
      </Router>
  );
}

export default App;
