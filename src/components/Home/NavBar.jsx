
import Logo from '../../assets/travler-logo.svg'
import {AiOutlineMenu, AiFillCaretDown} from 'react-icons/ai'
import { useState } from 'react'

import { Link , NavLink} from 'react-router-dom';

const NavBar = () => {
  

  const [dropIsOpen, setdropIsOpen] = useState(false);
  const [menuIsOpen, setmenuIsOpen] = useState(false);

  return (
      <>
    <div className=" flex justify-between h-10 w-[100vw] mx-auto  bg-transparent fixed" >
        <div className='flex justify-start'>
           <AiOutlineMenu size={25} className="self-center cursor-pointer" onClick ={()=> setmenuIsOpen(!menuIsOpen) }/>

           <NavLink to = "/"><img src={Logo} className=" object-contain w-20 h-10" alt="Travler" /></NavLink> 
         
         <h1 className='hidden sm:flex md:visible text-[black] font-extrabold text-lg sm:tracking-[2px] lg:tracking-[10px]  TRAVLER'>TRAVLER </h1> 
         </div>
             <div className=' bg-white bg-opacity-100 rounded-b-2xl w-[120px] sm:w-[60vw]'>

            <ul className='flex flex-row text-[15px] justify-around items-end h-full font-bold'>

              <div className=' flex flex-col sm:hidden '>
                <div className='flex justify-between h-[20px]'>
                <li className='relative bottom-1  '>HOME</li>
                <li className='sm:hidden '> <AiFillCaretDown size={20} className=" mb-2 px-1 cursor-pointer"  onClick={()=> setdropIsOpen(!dropIsOpen)}  /> </li>
                </div>
                         
                     

   { (dropIsOpen === true) ? 
     ( <div className=' flex absolute top-[40px]  '>
   <ul className=' inline-flex flex-col mt-1 bg-white z-50 rounded-md' >
   
   <li className='p-2 text-sm hover:bg-rose-300 '> <NavLink to = "/about">ABOUT US</NavLink></li>
   <li className='p-2 text-sm hover:bg-rose-300 '> <NavLink to = "/">HOME</NavLink></li>
   <li className='p-2 text-sm hover:bg-rose-300 '> <NavLink to = "/destinations">DESTINATIONS</NavLink></li>
   <li className='p-2 text-sm hover:bg-rose-300 '> <NavLink to = "/careers">CAREERS</NavLink></li>


</ul>
</div> ) :  null

} 
      </div>
                 <li className='hidden sm:flex cursor-pointer  ' > <NavLink to = "/">HOME</NavLink> </li> 
                <li className='hidden sm:flex cursor-pointer   '> <NavLink to = "/about">ABOUT US</NavLink></li>

                <li className='hidden sm:flex cursor-pointer  '> <NavLink to = "/destinations">DESTINATIONS</NavLink></li>

                <li className='hidden sm:flex cursor-pointer  '> <NavLink to = "/careers">CAREERS</NavLink></li>

            </ul>
            </div>
            
           <button className=' bg-slate-50 text-orange-500 font-extrabold px-[5px] text-sm  rounded-full'> <NavLink to="/bookticket" >Book Ticket </NavLink></button>
         
    </div>
      
                { menuIsOpen ? (
                <ul className='inline-flex flex-col mt-1 bg-white absolute left-1 top-[40px] z-[50] rounded-md ' >
                  <li className='p-2 text-sm hover:bg-rose-300 '> Login</li>
                  <li className='p-2 text-sm hover:bg-rose-300 '> Sign Up</li>
                  <li className='p-2 text-sm hover:bg-rose-300 '> Profile</li>
                  <li className='p-2 text-sm hover:bg-rose-300 '> Logout</li>


               </ul>) : null }
               
               
     <div className=' h-10 bg-transparent' ></div>       
            
    </>
  )
}

export default NavBar
