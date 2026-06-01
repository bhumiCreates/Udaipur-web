import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {navbarContext} from '../../context/navContext'
import React, { useContext, useRef } from "react";

const fullScreen = () => {

  const fullNavLinkRef = useRef(null)
  // const navbarData = useContext(navbarContext)
  const fullScreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(navbarContext)


    useGSAP(function () {
    const tl = gsap.timeline()
    tl.to('#fullScreenNav',{
      display:'block'
    })

    tl.from('.stairRing',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.from(fullNavLinkRef.current,{
      opacity:0
    })
    tl.from('.link',{
      opacity:0,
      rotateX:90,
      stagger:{
        amount:-0.25
      }
    })

    tl.pause()

    if(navOpen){
      fullScreenRef.current.style.display = 'block'
      tl.play()
    }else{
      fullScreenRef.current.style.display = 'none'
      tl.reverse()
    }
  },[navOpen])

  return (
    <div ref={fullScreenRef}
      id="fullScreen" 
      className="z-60 text-white hidden overflow-x-hidden h-screen w-full absolute "
    >
      <div className="h-screen w-full fixed ">
        <div className='h-full flex w-full top-0 z-10'>
        <div className=' stairRing h-full w-1/5 bg-black'></div>
        <div className=' stairRing h-full w-1/5 bg-black'></div>
        <div className=' stairRing h-full w-1/5 bg-black'></div>
        <div className=' stairRing h-full w-1/5 bg-black'></div>
        <div className=' stairRing h-full w-1/5 bg-black'></div>
      </div>
      </div>
      <div ref={fullNavLinkRef} className='relative'>
      <div>
        <div className="flex w-full justify-between items-center px-4 py-2  ">
        <div className="border h-[8vh] min-w-40 w-[12vw] text-[4vh] text-white font-[font2] text-center p-2 rounded-br-3xl rounded-tl-3xl shadow-xl ">
        Udaipur 
        </div>
        <svg onClick={()=>{
          setNavOpen(false)
        }}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="70"
          height="70"
          viewBox="0 0 50 50"
          fill='#ffffff'
        >
          <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
        </svg>


      </div>
      <div className="mt-[12vh]">
        <div className="link origin-top relative border-y">
          <h1 className="font-[font1] text-center leading-none p-1 text-[13vh] uppercase">
            Popular
          </h1>
          <div className="moveLink absolute text-black bg-yellow-400 top-0 flex ">
            <div className="moveX shrink-0 flex items-center">
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Feel the energy of music
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/flagged/photo-1566843918030-3c250670245d?q=80&w=1015&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Feel the energy of music
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1619229666372-3c26c399a4cb?q=80&w=1015&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="moveX shrink-0 flex items-center">
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Feel the energy of music
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/flagged/photo-1566843918030-3c250670245d?q=80&w=1015&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Feel the energy of music
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1619229666372-3c26c399a4cb?q=80&w=1015&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div className="link origin-top relative border-y">
          <h1 className="font-[font1] text-center leading-none p-1 text-[13vh] uppercase">
            Folk
          </h1>
          <div className="moveLink absolute text-black bg-yellow-400 top-0 flex ">
            <div className="moveX shrink-0 flex items-center">
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Experience the folks of rajastan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://plus.unsplash.com/premium_photo-1718570256660-462115d86304?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Experience the folks of rajastan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1681731030357-829645dd55b1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="moveX shrink-0 flex items-center">
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Experience the folks of rajastan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://plus.unsplash.com/premium_photo-1718570256660-462115d86304?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                Experience the folks of rajastan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1681731030357-829645dd55b1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div className="link origin-top relative border-y">
          <h1 className="font-[font1] text-center leading-none p-1 text-[13vh] uppercase">
            Annual
          </h1>
          <div className="moveLink absolute text-black bg-yellow-400 top-0 flex ">
            <div className="moveX shrink-0 flex items-center">
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                The Pride of Rajasthan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1717131553948-13c2c59c7293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                The Pride of Rajasthan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1769718460805-97642006a6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFubnVhbCUyMGV2ZW50cyUyMGluJTIwcmFqYXN0aGFufGVufDB8MHwwfHx8MA%3D%3D"
              />
            </div>
            <div className="moveX shrink-0 flex items-center">
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                The Pride of Rajasthan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1717131553948-13c2c59c7293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h2 className="whitespace-nowrap font-[font1] leading-none pt-1 text-[13vh] uppercase">
                The Pride of Rajasthan
              </h2>
              <img
                className="object-cover shrink-0 h-25 py-3 rounded-full "
                src="https://images.unsplash.com/photo-1769718460805-97642006a6bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFubnVhbCUyMGV2ZW50cyUyMGluJTIwcmFqYXN0aGFufGVufDB8MHwwfHx8MA%3D%3D"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default fullScreen;
