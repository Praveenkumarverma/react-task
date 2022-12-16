import React from 'react';
import Login from './components/Login';
import Signup from './components/SignUp';
import Profile from './components/Profile';
import CreateQuote from './components/CreateQuote';
import Home from './components/Home';

export const routes =[
    {path:"/",element:<Home/>},
    {path:"/CreateQuote",element:<CreateQuote/>},
    {path:"/Login",element:<Login/>},
    {path:"/Signup",element:<Signup/>},
    {path:"/Profile",element:<Profile/>},
]