import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Navbar from './components/Navigation/navbar';
import FullScreen from './components/Navigation/fullScreen';

const App = () => {

  return (
    <div >
      <Navbar />
      <FullScreen/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Events' element={<Events/>} />
      </Routes>
    </div>
    
  )
}

export default App
