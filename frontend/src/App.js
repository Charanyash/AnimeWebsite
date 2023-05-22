import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Route,Routes,useNavigate} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import TopAnime from './Components/TopAnime'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path = "/"  element={ <Home/>}/>
        <Route exact path="/login" element={ < Login />} />
        <Route exact path = "/topanime" element = {<TopAnime/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
