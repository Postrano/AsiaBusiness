import React from 'react'
import Hero from './components/hero'
import LandOne from './components/landone'
import LandTwo from './components/landtwo'
import Landthree from './components/landthree'
import LandFour from './components/landfour'
import Footer from './components/footer'

const page = () => {
  return (
    <div className="bg-white">
      <Hero/>
      <LandOne/>
      <div className="bg-gray-100 bg-[radial-gradient(circle,rgba(0,0,0,0.1) 1px,transparent 1px)] bg-[size:10px_10px] p-4 space-y-6">

      <LandTwo/>
      </div>
      <Landthree/>
      <LandFour/>
     
    </div>
  )
}

export default page
