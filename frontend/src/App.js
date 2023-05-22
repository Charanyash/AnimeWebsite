import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Route,Routes,useNavigate} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/"  element={ < NavBar />}>
        <Route exact path="/login" element={ < Login />} />
      </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
