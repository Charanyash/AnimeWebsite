import React from 'react';

import { BrowserRouter} from 'react-router-dom';
import { Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/login';

//Components should always be first letter capital. Very strange thing!!

function App() {
     

  return (<>

 <BrowserRouter>
      <Routes>
        <Route exact path = "/"  element={ < NavBar />}></Route> 
      <Route exact path ="/login" element={ < Login /> }></Route>
      </Routes>
      </BrowserRouter>
    
      </>
  );
}

export default App;
