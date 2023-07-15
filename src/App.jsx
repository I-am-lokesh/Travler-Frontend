import react from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import BookTicket from './pages/BookTicket'
import Destinations from './pages/Destinations'
function App() {
  const [count, setCount] = useState(0)

  return (    <>
         <BrowserRouter>
        <Routes>
           <Route path = "/" element = {<Home/>} />
               <Route path = "/bookticket" element = {<BookTicket />} />
               <Route path = "/destinations" element = {<Destinations />} />
            
        </Routes>
        </BrowserRouter>
        </>
     )
}

export default App
