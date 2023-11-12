import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg"

const Reviews = () => {
  return (
    <div className='my-16 px-4 lg:px-24'> 
        <h2 className='text-5xl text-black font-bold mb-10 leading-snug text-center'>Our Customers</h2>

    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corporis. Modi eligendi nisi iste dignissimos voluptates quis quidem quos, beatae ipsam aliquam, pariatur odit debitis libero sed, inventore vero officia?</p>
                    <Avatar
                        alt="avatar of Jese"
                        img= {proPic}
                        rounded
                        className='mb-4 w-10'
                    />
                    <h5 className='text:lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corporis. Modi eligendi nisi iste dignissimos voluptates quis quidem quos, beatae ipsam aliquam, pariatur odit debitis libero sed, inventore vero officia?</p>
                    <Avatar
                        alt="avatar of Jese"
                        img= {proPic}
                        rounded
                        className='mb-4 w-10'
                    />
                    <h5 className='text:lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corporis. Modi eligendi nisi iste dignissimos voluptates quis quidem quos, beatae ipsam aliquam, pariatur odit debitis libero sed, inventore vero officia?</p>
                    <Avatar
                        alt="avatar of Jese"
                        img= {proPic}
                        rounded
                        className='mb-4 w-10'
                    />
                    <h5 className='text:lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corporis. Modi eligendi nisi iste dignissimos voluptates quis quidem quos, beatae ipsam aliquam, pariatur odit debitis libero sed, inventore vero officia?</p>
                    <Avatar
                        alt="avatar of Jese"
                        img= {proPic}
                        rounded
                        className='mb-4 w-10'
                    />
                    <h5 className='text:lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corporis. Modi eligendi nisi iste dignissimos voluptates quis quidem quos, beatae ipsam aliquam, pariatur odit debitis libero sed, inventore vero officia?</p>
                    <Avatar
                        alt="avatar of Jese"
                        img= {proPic}
                        rounded
                        className='mb-4 w-10'
                    />
                    <h5 className='text:lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>

  )
}

export default Reviews