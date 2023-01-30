import React from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Productscreen from './Productscreen'

function Homescreen({logout}) {
  return (
    <div>
        <Navbar logout={logout}/>
        <Navbar2/>
        <Productscreen/>
    </div>
  )
}

export default Homescreen