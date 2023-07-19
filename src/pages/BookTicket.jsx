import NavBar from "../components/Home/NavBar";
import Topdiv from "../components/BookTicket/Topdiv";
import BlueBlock from "../components/BookTicket/BlueBlock";


import Carousel from "../components/BookTicket/Carousel";
import SearchBar from "../components/BookTicket/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
const BookTicket = () => {

  const [city, setCity] = useState();
  useEffect(() => { 
        const locationData = axios.get("https://geolocation-db.com/json/8ccfa540-1cde-11ee-b4fb-5f58249fb2cc")
         .then((res) => {
            console.log(res)
             setCity(res.data.city)
             console.log(city)
          }).catch((err) => {
            console.log(err)
          });
  },[city]);



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
