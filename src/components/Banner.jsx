import React from 'react'
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex flex-col w-full md:flex-row justify-between items-center gap-12 py-40'>
            {/* Left side */}
            <div className='h-full md:w-1/2 space-y-8'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books<span className='text-blue-700'> for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore voluptatum libero numquam minus porro sapiente quod neque quia eius incidunt nulla, aspernatur est repellendus dolores amet ducimus cupiditate architecto?</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* Right side */}
            <div className='h-full'>
              <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner