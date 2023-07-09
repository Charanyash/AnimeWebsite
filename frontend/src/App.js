import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import TopAnime from './Components/TopAnime'
import Signup from './Components/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/"  element={ < Home />} />
        <Route exact path="/login" element={ < Login />} />
        <Route exact path = "/topanime" element = {<TopAnime/>}/>
        <Route exact path = "/signup" element = {<Signup/>}/>
      </Routes>
      </Router>
  );
}

export default App;
