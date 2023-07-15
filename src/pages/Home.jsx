
import { useState } from 'react'


import NavBar from '../components/Home/NavBar'
import OrangeBlock from '../components/Home/OrangeBlock'
import Topdiv from '../components/Home/Topdiv'
import SearchBar from '../components/Home/SearchBar'
import MidDiv from '../components/Home/MidDiv'
import BottomDiv from '../components/Home/BottomDiv'
import BottomBlock from '../components/Home/BottomBlock'
import Footer from '../components/Home/Footer'

function Home() {
    const [count, setCount] = useState(0)
  
    return (
      <>  
          
          <OrangeBlock></OrangeBlock>
          <NavBar></NavBar>
           <Topdiv></Topdiv>
           <br />
           <SearchBar></SearchBar>
           <br /><br />
           <MidDiv/>
           <br />
         
          <BottomDiv/>
          <Footer></Footer>
        
      </>
    )
  }
  
  export default Home
  