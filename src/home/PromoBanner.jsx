import React from 'react'
import { Link } from 'react-router-dom'
import PromoImg from "../assets/awardbooks.png"

const PromoBanner = () => {
  return (
    <div className='mt-16 px-4 lg:px-24 py-12 bg-teal-100'>

        <div className='flex flex-col md:flex-row items-center justify-between'>

            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Awards for Fiction Shortlist</h2>
                <Link to = '/shop' className='block'><button className=' bg-blue-700 py-2 px-5 rounded text-white font-semibold hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
            </div>
            
            <div className=''>
                <img src= {PromoImg} alt="" className='w-96'/>
            </div>

        </div>
    </div>
  )
}

export default PromoBanner