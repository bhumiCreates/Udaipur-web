import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Tourism from './Pages/Tourism';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const App = () => {

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.3
      }
    })

    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.3
      }
    })
  })

  return (
    <div className='text-white'>

      <div className='h-screen flex fixed w-full top-0 z-10'>
        <div className=' stair h-full w-1/5 bg-black'></div>
        <div className=' stair h-full w-1/5 bg-black'></div>
        <div className=' stair h-full w-1/5 bg-black'></div>
        <div className=' stair h-full w-1/5 bg-black'></div>
        <div className=' stair h-full w-1/5 bg-black'></div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Tourism' element={<Tourism/>} />
        <Route path='/Events' element={<Events/>} />
      </Routes>
    </div>
    
  )
}

export default App
