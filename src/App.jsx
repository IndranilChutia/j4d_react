import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
