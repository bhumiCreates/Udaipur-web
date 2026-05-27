import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Events = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray =[ 
    "https://images.unsplash.com/photo-1738853375736-65d04c8d076f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1718570264943-eae6e5600720?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwZXZlbnRzJTIwaW1hZ2VzJTIwaW5kaWF8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1599106242946-fd550dac004c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1774437667918-fa97d2be77c2?q=80&w=668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727076091097-bff6f69d889a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1770791366174-f1b88ef1a367?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYzfHxyYW5kb20lMjBldmVudHMlMjBpbWFnZXMlMjBpbmRpYXxlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1681731030409-c4448f48a701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwZXZlbnRzJTIwaW1hZ2VzJTIwaW5kaWElMjByYWphc3RoYW58ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1690382379501-b8b256b1b857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
      trigger:imageDivRef.current,
      markers:true,
      start:'top 22%',
      end:'top -120%',
      scrub:true,
      pin:true,
      onUpdate:(elem)=>{
        let imageIndex;
        
        if(elem.progress<1){
          imageIndex = Math.floor(elem.progress * imageArray.length)
        }else{
          imageIndex = imageArray.length-1
        }

        imageRef.current.src= imageArray[imageIndex]
      }
      }
    })
  })

  return (
    <div>
      <div className="section1">
        <div ref={imageDivRef} className="h-[20vw] w-[15vw] rounded-xl absolute top-[22vh] left-[50vh] overflow-hidden bg-amber-400 ">
          <img ref={imageRef}
            className="h-full w-full"
            src="https://i.pinimg.com/736x/43/5f/0f/435f0fa2571ae6f466555657a4c718d2.jpg"
            alt="Events"
          />
        </div>
      </div>
      <div className="section2 h-screen">
        <div className=" relative font-[font1]">
          <div className="mt-[60vh]">
            <h1 className="text-[17vw] text-center uppercase leading-[35vh]">
              Upcoming <br /> Events
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className="text-4xl">
              &emsp;&emsp;&ensp; Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aspernatur, nobis? Harum excepturi dolorem quo
              ad ratione. Accusamus voluptate facere ea quia est perferendis
              blanditiis veritatis, odio quis dicta voluptates vitae sit animi
              possimus nostrum non laudantium aliquid asperiores saepe
              temporibus corrupti soluta maxime fugiat. Explicabo soluta sed
              molestias amet laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
