import image from "../../assets/Home-Page-1.png"

const Topdiv = () => {
  return ( <>
  <br />
  <br />
    <div className=" flex bg-opacity-40 justify-around w-[100vw] xl:h-[90vh]">
        <div className=" flex  w-2/3 sm:w-1/2   flex-col ">
              <div className=" flex h-1/4 flex-col justify-end">
                   <p className=" ml-[10vw]  text-[4vw] sm:text-[2.5vw] xl:text-[1.5vw] POPPINS font-semibold text-[#FF7324]">EXPLORE DESTINATIONS AROUND INDIA</p>
              </div>
              <div className=" h-fit text-[11vw] sm:text-[8vw] xl:text-[6vw]  ">
                 <p className=" MERRI text-[#084A5F] font-extrabold ml-[10vw]" > Travel to any part of 
                 <p className="text-[#FF7324] inline "> India</p>. </p>
              </div>
              <div className=" h-1/4">
                <p className="POPPINS ml-[10vw] font-bold text-[3vw] sm:text-[2.5vw] xl:text-[1.5vw]">Skip the Wait, Secure Instant Bookings!</p>
              </div>
              </div>


              <div className="w-1/3 sm:w-1/2 flex flex-col items-center justify-center ">
                <img src= {image} alt="img" className=" object-contain xl:w-[50vw] xl:h-[40vw] " />
              </div>

    </div>
    </>
  )
}

export default Topdiv
