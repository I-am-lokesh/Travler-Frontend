import {AiOutlineSearch} from "react-icons/ai"
const SearchBar = () => {
  return ( <>
    <div className=" flex-wrap  ml-[5vw]  w-[90vw] sm:w-[70vw] rounded-2xl bg-white flex justify-around shadow shadow-black overflow-hidden self-center">
          <form action="submit" className="flex flex-row w-full justify-around ">
           <div className=" flex  flex-col w-1/4 rounded-2xl  justify-around POPPINS align-middle text-[2vw] sm:text-[1.5vw]  " > 
                <label htmlFor="destination" className=" m-auto font-bold"> Destination</label> 
                <input type="search"name="destination" id="destination" className=" h-1/2 m-auto rounded-md  shadow-black shadow-sm" placeholder=" Search destination" />
           </div>
           <div className=" flex flex-col w-1/4 rounded-2xl  justify-around POPPINS align-middle text-[2vw] sm:text-[1.5vw] px-2 mx-2 " >
           <label htmlFor="date" className=" m-auto font-bold"> Date</label> 
                <input type="date" name="date" className=" h-1/2  m-auto rounded-md shadow-black shadow-sm  " placeholder="Select date"/>
            </div>
            <div className=" flex flex-col w-1/4 rounded-2xl  justify-around POPPINS align-middle text-[2vw] sm:text-[1.5vw] " >
            <label htmlFor="people" className=" m-auto font-bold"> People</label> 
                <input type="text" className=" h-1/2 m-auto rounded-md align-middle shadow-black shadow-sm " placeholder=" No. of persons" />
            </div>
            <div className=" flex flex-row-reverse items-center w-1/4 rounded-2xl   POPPINS align-middle " >
            <AiOutlineSearch size= {45}/>

                   
            </div>
           
            </form>
    </div>
  </>
  )
}

export default SearchBar
