import React from 'react'
import bgVideo from "/src/assets/Videos/bgVideo.mp4";

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
