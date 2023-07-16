import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import User from './Components/User'
import Profile from './Components/Profile';
import WatchList from './Components/WatchList';
import TopAnime from './Components/TopAnime'
import Signup from './Components/Signup';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route  path = "/" element = {<Home/>}/> */}
        <Route  path = "/user" element = {<User/>}>
        <Route  path = "profile" element ={<Profile/>}/>
        <Route  path = "watchlist" element = {<WatchList/>}/> 
       </Route>
        <Route exact path = "/home"  element={ < Home />} />
        <Route exact path="/login" element={ < Login />} />
        <Route exact path = "/topanime" element = {<TopAnime/>}/>
        <Route exact path = "/signup" element = {<Signup/>}/>
        <Route exact path='/search' element = {<Search/>}/>
      </Routes>
      </Router>
  );
}

export default App;
