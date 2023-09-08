import NavBar from "../components/Home/NavBar";
import Topdiv from "../components/BookTicket/Topdiv";
import BlueBlock from "../components/BookTicket/BlueBlock";

import Carousel from "../components/BookTicket/Carousel";
import SearchBar from "../components/BookTicket/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

const BookTicket = () => {

  const [city, setCity] = useState();
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);


  navigator.geolocation && navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    },
    (error) => {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );
   console.log(lat , "lat") ; 
   console.log(long , "long") ;


   useEffect(() => {
         axios.get(

           `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`

         ).then((res) => {
            console.log(res.data) ;
            setCity(res.data.address.city) ;
            
          })
           .catch((err) => {
             console.log(err);
           });
    }, [lat, long]);



  return (
     <>
     <BlueBlock></BlueBlock>
         <NavBar />
         <Topdiv/>
        <Carousel city={city} />
        <br /><br />
        <SearchBar></SearchBar>
        <br /><br /><br /><br />
      
     
     </>
  )
}

export default BookTicket
