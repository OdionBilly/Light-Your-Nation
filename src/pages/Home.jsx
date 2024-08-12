import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Cart } from '../components/Cart'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Cart/>
        <Footer/>

    </div>
  )
}
