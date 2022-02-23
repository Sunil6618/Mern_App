import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Router/Home';
import Login from './Router/Login';
import Reg from './Router/Reg';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/Reg' element={<Reg/>} />
                <Route path='/Home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router;