'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
const page = () => {
    return (
        <><div className='grid grid-cols-12'>
            <div className="part1 bg-gray-600 h-[655px] rounded-lg col-span-8">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}

                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://admin.besttutor.xyz/_next/image?url=https%3A%2F%2Fapi.besttutor.xyz%2Fuploads%2Fprofile%2Fuser-1714700836.jpg&w=256&q=75https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
            <div className="col-span-4">
                <div className="part1 bg-amber-300  h-[371px] mb-6 ml-5 rounded-lg">

                </div>
                <div className="part1 bg-gray-300 h-[256px] mt-5 ml-5 rounded-lg">

                </div>
            </div>
        </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-8 gap-4 mt-3 mb-3 ">
                <div className="h-[192px] bg-gray-400 rounded-lg flex flex-col justify-center items-center">
                    <p>Mobile</p>
                    <p>Mobile</p>
                </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
                <div className="h-[192px] bg-gray-400 rounded-lg"> </div>
            </div>

            <div className="product h-[350px]">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    slidesPerView={6}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={15}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Grid]}
                    className="mySwiper"
                >
                    <SwiperSlide>rakib</SwiperSlide>
                    <SwiperSlide className='rounded-lg'>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>

                <button className="arrow-left arrow">Prev</button>
                <button className="arrow-right arrow">next</button>
            </div>
        </>
    )
}

export default page