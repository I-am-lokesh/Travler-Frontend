
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import BookTicket from './pages/BookTicket'
import Destinations from './pages/Destinations'
import PaymentSuccess from './pages/PaymentSuccess'
import ViewTicket from './pages/ViewTicket'
function App() {
  

  return (    
        <>
        <BrowserRouter>
        <Routes>

               <Route path = "/" element = {<Home/>} />
               <Route path = "/bookticket" element = {<BookTicket />} />
               <Route path = "/destinations" element = {<Destinations />} />
               <Route path = "/paymentSuccess" element = {<PaymentSuccess />} />
               <Route path = "/viewTicket" element = {<ViewTicket />} />
                
        </Routes>
        </BrowserRouter>
        </> 
     )
}

export default App
