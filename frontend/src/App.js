import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import User from './Components/User'
import Profile from './Components/Profile';
import WatchList from './Components/WatchList';
// import Home from './Components/Home';
function App() {
  return (
    <>
    <Router>
      <div>
      <Routes>
        {/* <Route  path = "/" element = {<Home/>}/> */}
        <Route  path = "/Signup" element = {<Signup/>}/>
        <Route  path = "/login" element={ < Login /> }/>
        <Route  path = "/user" element = {<User/>}>
        <Route  path = "profile" element ={<Profile/>}/>
        <Route  path = "watch-list" element = {<WatchList/>}/> 
       </Route>
      </Routes>

      </div>
      </Router>

    </>

  );
}

export default App;
