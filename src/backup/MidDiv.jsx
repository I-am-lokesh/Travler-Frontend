import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '../../main.jsx';


const MidDiv = () => {

  const [destinations, setDestinations] = useState([]);
  const [sorted , setSorted] = useState();
  const [image, setImage] = useState([]);
 

  useEffect(() => {
     
    axios.get(`${server}/api/v1/destination/get/all`) 
      .then((response) => {
        setDestinations(response.data.destinations); 
        const sortedDestinations = destinations.sort((a, b) => b.no_of_visits - a.no_of_visits);
        
        const topSix = [] ;
        for (let i = 0; i < 6; i++) {
          topSix.push(sortedDestinations[i]) ;
        }

        setSorted(topSix);

        for(let i = 0; i < 6; i++) {
         sorted && sorted[i] && axios.get(`https://api.unsplash.com/search/photos?query=${sorted[i].name}&client_id=VzYzCV161H70QxU-EqlOg150kgdPlVhxm4hJF7_gpoM`)
         
        .then((res) => { 
          
          const img = res.data.results[0].urls.regular ;
          setImage((image) => [...image, img]) ;
           
        } )
        .catch((err) => {
          console.log(err)
         } )
        } 
      })
      .catch((error) => {
      console.error('Error fetching destinations', error);
      });

  }, [sorted] );
      

  

  const styles = {
    carouselContainer: {
      width: '100%',
      height: '300px',
    },
    carouselImage: {
      width: '100%',
      height: '400px',
      
      objectFit: 'cover',
    },
  };
   

   
   

  return (
    <div className="flex flex-col justify-start align-middle h-fit bg-transparent w-full MERRI">
         <div className="flex justify-center align-middle h-1/6"> 
            <p className=" font-extrabold text-[5vw] lg:text-[2.5vw]"> Explore Top Destinations</p>
         </div>
         <br />
         <div className=" flex justify-between mx-[10vw] h-[50vh] ">
         <Swiper
         height={400}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><p>Visited by {sorted && sorted[0] && sorted[0].no_of_visits + "-" + sorted[0].name } </p><img src={image && image[0]} style={styles.carouselImage} alt="" 
         className='shadow-md shadow-black'/> </SwiperSlide>

      <SwiperSlide><p>Visited by {sorted && sorted[1] && sorted[1].no_of_visits + "-" + sorted[1].name} </p><img src={image && image[1]} style={styles.carouselImage} alt=""
        className='shadow-md shadow-black'/></SwiperSlide>
      <SwiperSlide><p>Visited by {sorted && sorted[2] && sorted[2].no_of_visits + "-" + sorted[2].name} </p><img src={image && image[2]} style={styles.carouselImage} alt=""
        className='shadow-md shadow-black'/></SwiperSlide>
      <SwiperSlide><p>Visited by {sorted && sorted[3] && sorted[3].no_of_visits + "-" + sorted[3].name} </p><img src={image && image[3]} style={styles.carouselImage} alt=""
         className='shadow-md shadow-black'/></SwiperSlide>
      <SwiperSlide><p>Visited by {sorted && sorted[4] && sorted[4].no_of_visits + "-" + sorted[4].name} </p><img src={image && image[4]} style={styles.carouselImage} alt=""
        className='shadow-md shadow-black'/></SwiperSlide>
      <SwiperSlide><p>Visited by {sorted && sorted[5] && sorted[5].no_of_visits + "-" + sorted[5].name} </p><img src={image && image[5]} style={styles.carouselImage} alt=""
        className='shadow-md shadow-black'/></SwiperSlide>
      ...
    </Swiper>


         </div>

    </div>
  )
}

export default MidDiv
