
import bottomImg from "../../assets/BottomImg.png"
const BottomDiv = () => {
  return (
    <div className=' flex flex-around h-1/4 lg:h-1/5 w-[100vw]'>
               <div className='flex flex-col w-1/2 justify-start  '>

                <div className='flex justify-start h-1/4 ml-[1.5vw] lg:ml-[5vw]'>
                    <p className='flex items-end MERRI text-[5vw] lg:text-[3vw] text-[#084A5F] font-bold'>Services we provide </p>
                </div>
                    <div className=' flex flex-col justify-around h-3/4 items-start ml-[1.5vw] lg:ml-[5vw] '>
                      <ul className=' POPPINS text-[2vw] lg:text-[1.5vw] h-full py-5  font-bold'>
                             <li>Cut the queue, Book tickets any where, any time.</li>
                             <li>Book a ride, or get the bus to your destination with ease</li>
                             <li>Search accommodation nearby</li>
                             <li>Book e-carts</li>
                             <li>Order food within the premises</li>

                      </ul>

               </div>

               </div>
      <div className=" flex flex-row-reverse w-1/2 ">
        <img src={bottomImg} className="object-contain w-full h-full lg:w-5/6 lg:h-5/6 " alt="BottomIMg" />

      </div>
               
    </div>
  )
}

export default BottomDiv
