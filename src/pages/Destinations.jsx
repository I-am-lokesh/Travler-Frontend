
 import NavBar from '../components/Home/NavBar'
 import Topdiv from '../components/Destinations/Topdiv'
 import Description from '../components/Destinations/Description'
 import { useState, useEffect } from 'react'
 import axios from 'axios'
 import {server} from '../main.jsx'
 import { useLocation } from 'react-router-dom'

const Destinations = () => {
    
    const location = useLocation() ;
    const { destination_prop } = location.state || {} ;
    console.log(`destination_prop`, destination_prop)
    const [ destination, setDestination ] = useState(destination_prop) ;
         
       useEffect(() => {
        if(!destination) {

          axios.get(`${server}/api/v1/destination/get/one?id=64a3bc37b8309fed13db825b`)
          .then((res) => {
          
    
             setDestination(res.data.destination[0])
             
           })
           .catch((err) => 
           { console.log(err) } )
        }

       }, [destination])



  return (
     <>
         <NavBar></NavBar>
         <Topdiv destination_prop={ destination }></Topdiv>
         <Description destination_prop={ destination }> </Description>
         <br />
     </>
  )
}

export default Destinations
