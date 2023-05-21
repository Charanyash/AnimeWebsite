import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Signup from './Components/Signup';
function App() {
  return (
    <>
    <Router>
      <div>
      <Routes>
        <Route exact path = "/" element = {<NavBar/>} >
        </Route>
        <Route exact path = "/Signup" element = {<Signup/>}>
        </Route>
      </Routes>

      </div>
      </Router>

    </>
  );
}

export default App;
