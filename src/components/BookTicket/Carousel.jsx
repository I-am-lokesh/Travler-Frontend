
import { useState, useEffect } from "react";
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {server} from "../../main.jsx"
const Carousel = ( {city} ) => {

  const [destinations, setDestinations] = useState([]);
  const [sorted , setSorted] = useState();
  const [image, setImage] = useState([]);
   
  useEffect(() => { 
     
    axios.get(`${server}/api/v1/destination/get/all`, {
       withCredentials: true,
    }) 
    .then((response) => {
      setDestinations(response.data.destinations); 
      
      
      const sortedDestinations = destinations.sort((a, b) => b.no_of_visits - a.no_of_visits).slice(0, 15);
      setSorted(sortedDestinations);
      


      for(let i = 0; i < 16; i++) {
       sorted && sorted[i] && axios.get(`https://api.unsplash.com/search/photos?query=${sorted[i].name}&client_id=VzYzCV161H70QxU-EqlOg150kgdPlVhxm4hJF7_gpoM`)
      .then((res) => { 
        
        const img = res.data.results[3].urls.small ;
        setImage((image) => [...image, img])
         
      } )
      
      .catch((err) => {
        console.log(err)
       } )
      } 
    })
    .catch((error) => {
    console.error('Error fetching destinations', error);
    });

}, [sorted]);
      
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
     arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed (in milliseconds)
    pauseOnHover: true, // Pause autoplay on hover
  };

 const styles = {
    carouselContainer: {
      width: '100%',
      height: '200px',
    },
    carouselImage: {
      width: '100%',
      height: '200px',
      border: '5px solid black',
      objectFit: 'cover',
    },
  };


   


  return (
            <div className='w-[100vw] h-fit'>
          <div style={styles.carouselContainer}>

  <Slider {...settings}>
      
      <div>
        <img src={image && image[0]} alt="Image 2" 
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[1]} alt="Image 2"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[2]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[3]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[4]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[5]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[6]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[7]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[8]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[9]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[10]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[11]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[12]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[13]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image && image[14]} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      {/* Add more slide elements */}
    </Slider>
    </div>
     <br />
     <h1 className="POPPINS text-4xl m-6 font-bold"> Snapshot your City ! Search destinations in your city. </h1>
    </div>
    
  )
}

export default Carousel
