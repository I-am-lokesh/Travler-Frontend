import image from "../../assets/Taj.svg"
import { Swiper, SwiperSlide } from 'swiper/react';

import travlerlogo from "../../assets/travler-logo.svg"
import 'swiper/css';

const Topdiv = () => {
  return ( <>
  <br />
  <br />
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

     <div className=" h-[10vh] lg:h-[15vh] w-[100vw] bg-transparent flex items-end "> 

     <span className="MERRI text-[8vw] sm:text-[7vw] md:text-[6vw]  lg:text-[5vw] ml-[5vw] "> Qutub Minar</span>


     </div>
    </div>
    </>
  )
}

export default Topdiv
