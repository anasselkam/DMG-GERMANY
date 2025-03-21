import React from 'react'
import BgImages from '../../assets/images/hero1.jpeg'
import heroImg from '../../assets/images/hero0.png'

const BgStyle = {
    backgroundImage: `url(${BgImages})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
}



const Hero = () => {
  return (
    <>
    <section style={BgStyle} >
        
            <div className=" container h-[600px] grid grid-cols-1 md:grid-cols-2 ">
                 {/* Text content hero  */}
                     
                 <div className='flex flex-col justify-center h-full'>   
                    <h1 className="text-4xl md:text-4xl font-extrabold"><span className='text-red-500'>Welcome to DMG-GERMANY </span> <span className=' text-yellow-400'>your Gateway to Mastering German</span></h1>
                    <p className="text-lg mt-4">At DMG-GERMANY, we believe that learning a new language opens doors to new opportunities, cultures, and connections. Whether you're  a beginner or looking to refine your fluency, our expert instructors and immersive programs are designed to help you achieve your language GOALS.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Explore courses</button>
                </div>
                {/* Image content hero  */}
                <div className='flex justify-center items-end'>
                    <img src={heroImg} alt="" />
                </div>
                
            </div>
       
    </section>
    </>
  )
}

export default Hero