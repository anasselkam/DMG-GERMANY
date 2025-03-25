import React from 'react'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import Courses from './components/courses/Courses'


const App = () => {
  return (
    <main className='overflow-x-hidden text-white bg-[#242424]'> 
     
       <Hero />
      <Brand />
      <Courses />
      
    </main>
  )
}

export default App