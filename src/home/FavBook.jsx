import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
// import 
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src= {FavBookImg} className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl my-5 font-bold leading-snug'>Find Your Favourite <span className='text-blue-700'>Book Here!</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia?</p>

        {/* Stats */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 md:w-3/4 my-14'>
          <div >
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>

          <div >
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Registered Users</p>
          </div>

          <div >
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>Downloads</p>
          </div>
          
        </div>

        <Link to = '/shop' className='mt-12 block'><button className=' bg-blue-700 py-2 px-5 rounded text-white font-semibold hover:bg-black transition-all duration-300'>Explore More</button> </Link>
      </div>
    </div>
  )
}

export default FavBook