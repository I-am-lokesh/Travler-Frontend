import React from 'react'

const Description = () => {
  return (    <>

  
    <div className=' flex flex-col justify-between POPPINS mt-2'>
            <div className=' flex flex-row justify-around h-fit '>
                 <div className=" POPPINS w-1/2 flex flex-col bg-white rounded-2xl">
                    <span className='text-[5vw] lg:text-[3vw] px-3'> About</span>
                    <br />
                     <p className=' text-[3vw] lg:text-[1.5vw] mx-[5px]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, sint voluptatibus. Tempore adipisci impedit repellendus quaerat cupiditate vitae officia illo, pariatur aliquid. Nam labore iste sequi totam voluptatem autem sunt?</p>
                  <br />
                </div>  
                  
                 <div className=' bg-white flex flex-col rounded-2xl w-1/3'>
                         <span className='text-[5vw] lg:text-[3vw] px-3 self-center'> Timings</span>
                         <br />
                         <p className=' text-[3vw] lg:text-[1.5vw] mx-[5px]'>
                              <ul>
                                <li> Sunday -</li>
                                <li>Monday -</li>
                                <li>Tuesday -</li>
                                <li>Wednesday -</li>
                                <li>Thursday -</li>
                                <li>Friday -</li>
                                <li>Saturday -</li>
                              </ul>
                         </p>
                         <br />
                 </div>
            </div>

                <br /> 

            <div className=' flex flex-row justify-around h-1/3 POPPINS bg-white w-[91vw] rounded-2xl self-center'>
                
                   <div className=' flex flex-col pt-2'>
                          <div className='flex flex-col '>
                             <span className=' lg:font-semibold font-medium text-[3.5vw] sm:text-[2.5vw] lg:text-[1.5vw]'> Select Date</span> <br />
                              <span className=' flex flex-col lg:flex-row justify-center items-center text-[2.5vw] lg:text-[1.5vw]'> 

                              <span className=' flex flex-col  '>
                                <label htmlFor="CheckIn" className='font-semibold'> Check in</label>
                                 <input type="date" name='CheckIn' placeholder='Check in' />
                                 </span>
                                 <span className=' flex flex-col '>
                                 <label htmlFor="CheckOut"  className='font-semibold'> Check out</label>
                                 <input type="date" name='CheckOut' placeholder='Check out' />
                                 </span>
                              </span>
                          </div>
                          <br />
                    <div className='flex flex-col text-[2.5vw]'>
                    
                             <span className=' font-semibold lg:text-[1.5vw]'> Nationality</span> 
                              <span className=' flex justify-center items-center lg:text-[1.5vw]'> 
                            
                                 <input type="text" name='nationality' placeholder='Enter your nationality' required/>
                              </span>
                    </div>
                    <br />
             
                   </div>
                   <div className=' flex flex-col justify-center items-center font-bold text-[3.5vw] lg:text-[2vw]  '>
                     <span>Ticket Fare</span>
                     <span> 35Rs</span>

                   </div>
                   <div className=' flex justify-center items-center font-bold text-[4vw] lg:text-[2vw]'>
                    <button className='bg-[#FF7324] text-[white] px-2 py-2 rounded-2xl font-bold'> BOOK ! </button>
                   </div>


            </div>
    </div>
    </>
  )
}

export default Description
