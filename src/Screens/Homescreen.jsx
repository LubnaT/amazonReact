import React from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'


function Homescreen({logout}) {
  return (
    <div>
        <Navbar logout={logout}/>
        <Navbar2/>
    </div>
  )
}

export default Homescreen