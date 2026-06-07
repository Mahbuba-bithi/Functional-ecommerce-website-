import React from 'react'
import Hero from "../Hero/Hero";
import About from '../About/About'
import ContactUs from '../Contact/Contact'
const home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <ContactUs/>
    </div>
  )
}

export default home
