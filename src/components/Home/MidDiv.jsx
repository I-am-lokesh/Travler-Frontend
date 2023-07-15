import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const MidDiv = () => {
  return (
    <div className="flex flex-col justify-start align-middle h-fit bg-transparent w-full MERRI">
         <div className="flex justify-center align-middle h-1/6"> 
            <p className=" font-extrabold text-[5vw] lg:text-[2.5vw]"> Explore Top Destinations</p>
         </div>
         <br />
         <div className=" flex justify-between mx-[10vw] h-[40vh] ">
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>


         </div>

    </div>
  )
}

export default MidDiv
