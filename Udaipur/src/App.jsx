import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Tourism from './Pages/Tourism';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Tourism/>} />
        <Route path='/' element={<Events/>} />
      </Routes>
    </div>
  )
}

export default App
