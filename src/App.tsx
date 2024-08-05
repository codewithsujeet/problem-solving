import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Page404 from './pages/pageNotFound/Page404';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
