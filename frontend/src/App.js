import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Signup from './Components/Signup';
import Login from './Components/Login';
function App() {
  return (
    <>
    <Router>
      <div>
      <Routes>
        <Route exact path = "/" element = {<Signup/>}>
        </Route>
        <Route exact path ="/login" element={ < Login /> }></Route>
        <Route exact path = "/home"  element={ < NavBar />}></Route>
      </Routes>

      </div>
      </Router>

    </>

  );
}

export default App;
