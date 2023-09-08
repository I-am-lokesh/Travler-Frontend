
import Slider from "react-slick";
import axios from 'axios';


import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topdiv = ({ destination_prop }) => {
              
        const [destination, setDestination] = useState(destination_prop) ;
        const [image, setImage] = useState([]);

          useEffect(() => {
            setDestination(destination_prop)
             if(destination) {
             axios.get(`https://api.unsplash.com/search/photos?query=${destination.name}&client_id=VzYzCV161H70QxU-EqlOg150kgdPlVhxm4hJF7_gpoM`)
             .then((res) => {
                
               setImage(res.data.results)
              })
              .catch((err) => {
                console.log(err)
              });
            }


            }, [destination, image, destination_prop])
           

             
        const settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              arrows: false,
              slidesToScroll: 1,
              autoplay: true, // Enable autoplay
              autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
              pauseOnHover: true, // Pause autoplay on hover
            };

           const styles = {
              carouselContainer: {
                width: '100%',
                height: '450px',
              },
              carouselImage: {
                width: '100%',
                height: '450px',
                border: '1px solid black',
                objectFit: 'cover',
              },
            };

  return ( <>
  <br />
  <br />
  <div className='w-100vw h-fit'>
    <div style={styles.carouselContainer}>
  <Slider {...settings}>
      
      <div>
        <img src={image[0] && image[0].urls.regular} alt="Image 2" 
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[1].urls.regular} alt="Image 2"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[2].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[3].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[4].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[5].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[6].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[7].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[8].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      <div>
        <img src={image[0] && image[9].urls.regular} alt="Image 3"
        style={styles.carouselImage} />
      </div>
      {/* Add more slide elements */}
    </Slider>
    </div>
     <br />

     <div className=" h-[10vh] lg:h-[15vh] w-[100vw] bg-transparent flex items-end "> 

     <span className="MERRI text-[8vw] sm:text-[7vw] md:text-[6vw]  lg:text-[5vw] ml-[5vw] "> {destination && destination.name} </span>


     </div>
    </div>
    </>
  )
}

export default Topdiv
