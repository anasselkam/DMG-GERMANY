import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import Courses from './components/courses/Courses'

const App = () => {
  return (
    <main className='overflow-x-hidden text-white bg-black'> 
     
       <Hero />
      <Brand />
      <Courses />  
    </main>
  )
}

export default App