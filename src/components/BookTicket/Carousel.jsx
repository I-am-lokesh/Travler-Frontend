import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import reactImg from "../../assets/react.svg"
import travlerlogo from "../../assets/travler-logo.svg"
import 'swiper/css';
const Carousel = () => {
  return (
            <div className='w-100vw h-fit'>
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={travlerlogo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={travlerlogo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={travlerlogo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={travlerlogo} alt="" /></SwiperSlide>
      ...
    </Swiper>
    </div>
    
  )
}

export default Carousel
