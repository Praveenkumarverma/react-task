import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
// import CreateQuote from './components/CreateQuote';
// import Home from './components/Home';
// import Login from './components/Login';
import NavBar from './components/NavBar';
// import Profile from './components/Profile';
// import Signup from './components/SignUp';
import {routes} from './routes';

function App() {
const element = useRoutes(routes)
  return (
    <div >
      <NavBar/>
      {element}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Profile/> */}
      {/* <CreateQuote/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
