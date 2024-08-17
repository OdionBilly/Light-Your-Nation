import React from 'react'
import { Navbar } from '../components/Navbar'
import { Values } from '../components/Values'
import { Footer } from '../components/Footer';
import { Objective } from '../components/Objective';

export const Services = () => {
  return (
    <div className="">
      <Navbar />
      <Values />
      <Objective/>
      <Footer/>
    </div>
  );
}

