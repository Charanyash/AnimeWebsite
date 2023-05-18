import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Route,Routes,useNavigate} from 'react-router-dom';
import NavBar from './Components/NavBar';
import login from './Components/login';

function App() {
  return (<>
    <BrowserRouter>

      <Routes>

      <Route exact path = "/" element={<NavBar/>}>
      </Route>
      </Routes>
      </BrowserRouter>
    <login/>
    </>
  );
}

export default App;
