import React from 'react';
// import { BrowserRouter} from 'react-router-dom';
// import { Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/login';

//Components should always be first letter capital. Very strange thing!!

function App() {



  return (
    <>
    <NavBar/>
    <div className="container" style={{}}>
      <Login/>
    </div>
    </>
  );
}

export default App;
