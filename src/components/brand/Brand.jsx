import React from 'react'
import Brand1 from "../../assets/Brand/brand1.png"
import Brand2 from "../../assets/Brand/brand2.png"
import Brand3 from "../../assets/Brand/brand3.png"
import Brand4 from "../../assets/Brand/brand4.png"
import Brand5 from "../../assets/Brand/brand5.png"


const Brand = () => {
  return (
    <section className='bg-slate-300' >
        <div className="container" flex justify-around py-4>
           
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 py-4">
                <img src={Brand1} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand2} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand3} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand4} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand5} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
            </div>
            
           
        </div>
    </ section>
  )
}

export default Brand