import image from "../../assets/Taj.svg"

const Topdiv = () => {
  return ( <>
  <br />
  <br />
    <div className=" flex bg-opacity-40 justify-around w-[100vw] xl:h-[90vh]">
        <div className=" flex  w-2/3 sm:w-1/2   flex-col items-center justify-center ">
              
              <div className=" h-fit text-[5vw] sm:text-[4vw] xl:text-[4vw]  ">
                 <p className=" POPPINS text-[#084A5F] font-extrabold ml-[10vw]" >Seize the Moment, Secure Your Tickets Today! </p>
                 
              </div>
              
              </div>


              <div className="w-1/3 sm:w-1/2 flex flex-col items-center justify-start ">
            <img src= {image} alt="img" className=" object-contain xl:w-full xl:h-full " />
              </div>

    </div>
    </>
  )
}

export default Topdiv
