import Navbar from "./Component/Navbar"
import React from 'react'
import Home from "./Component/Home"
import Home2 from "./Component/Home2"
import Fotter from "./Component/Fotter"
import Testimonial1 from "./Component/Testimonial1"
import Testimonial2 from "./Component/Testimonial2"
import Community from "./Component/Community"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Home2/>
      <Testimonial1/>
      <Testimonial2/>
      <Community/>

      <Fotter/>
    </div>
  )
}

export default App