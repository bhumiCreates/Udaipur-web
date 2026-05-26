import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] pb-[10vh] flex items-center justify-center gap-4'>
      <div className='border hover:border-yellow-400 hover:scale-110 transition-all duration-150 ease-out px-4 pt-5 pb-3 rounded-bl-2xl  rounded-tr-2xl overflow-hidden  uppercase leading-[2vw]'>
      <Link className='text-[3vw]' to='/Tourism'>Tourism</Link>
      </div>
      <div className='border hover:border-yellow-400 hover:scale-110 transition-all duration-150 ease-out px-4 pt-5 pb-3  rounded-bl-2xl  rounded-tr-2xl overflow-hidden  uppercase leading-[2vw]'>
      <Link className='text-[3vw]' to='/Events'>Events</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
