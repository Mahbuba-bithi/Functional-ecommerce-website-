import React from 'react'
import Hero from "../Hero/Hero";
import About from '../About/About'
import ContactUs from '../Contact/Contact'
import Country from '../Country/Country';
const home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Country/>
      <ContactUs/>
    </div>
  )
}

export default home
