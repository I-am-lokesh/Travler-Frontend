import NavBar from "../components/Home/NavBar";
import Topdiv from "../components/BookTicket/Topdiv";
import BlueBlock from "../components/BookTicket/BlueBlock";
import Box from "../components/BookTicket/Box";

import Carousel from "../components/BookTicket/Carousel";
import SearchBar from "../components/BookTicket/SearchBar";
const BookTicket = () => {
  return (
     <>
     <BlueBlock></BlueBlock>
         <NavBar />
         
        <Topdiv/>
        <Carousel/>
        <br /><br />
        <SearchBar></SearchBar>
        <br /><br /><br /><br />
      
     
     </>
  )
}

export default BookTicket
