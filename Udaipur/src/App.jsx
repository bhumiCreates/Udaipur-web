import React from 'react'
// import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
// import Events from './Pages/Events';
// import Tourism from './Pages/Tourism';
// import Navbar from './components/Navigation/navbar';
import FullScreen from './components/Navigation/fullScreen';

const App = () => {



  return (
    <div className='text-white'>
      {/* <Navbar /> */}
      <FullScreen/>
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Tourism' element={<Tourism/>} />
        <Route path='/Events' element={<Events/>} />
      </Routes> */}
    </div>
    
  )
}

export default App
