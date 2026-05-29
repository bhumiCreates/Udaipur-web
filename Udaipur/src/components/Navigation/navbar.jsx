import React, { useRef } from 'react'

const navbar = () => {

  const navGreenRef = useRef(null)

  return (
    <div className="flex fixed top-0 w-full items-start justify-between">
        <div className="border m-3 h-[8vh] w-[12vw] text-[4vh] text-black font-[font2]  text-center p-2 rounded-br-3xl rounded-tl-3xl shadow-xl ">
          Udaipur
        </div>
        <div onMouseEnter={()=>{
          navGreenRef.current.style.height = '100%'
        }}
        onMouseLeave={()=>{
          navGreenRef.current.style.height = '0%'
        }} 
        className='h-[7vh] border-black border relative w-[14vw]'>
        <div><svg className="z-10 h-10 w-10 transition-all duration-300 hover:rotate-90 hover:scale-110" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="5vh" viewBox="0 0 50 50">
            <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
          </svg>
        <div ref={navGreenRef} className='bg-yellow-300 flex transition-all absolute top-0 h-full w-full justify-end items-center'>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default navbar
