import React, { createContext, useState } from 'react'
 
export const navbarContext = createContext()

const navContext = ({children}) => {
   
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
      <navbarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </navbarContext.Provider>
    </div>
  )
}

export default navContext
