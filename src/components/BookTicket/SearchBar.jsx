import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../main.jsx";
import Box from "./Box.jsx";


const SearchBar = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [dest, setDest] = useState([]);
  
  useEffect(() => {

    const { data } = axios
      .get(`${server}/api/v1/destination/get/${city}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.destinations);
        setDest(res.data.destinations);
      })
      .catch((err) => {
        console.log(err);
      });
   }, [city]);

   

  

  const submitHandler = (e) => {
    e.preventDefault();
   
  };

  return (
    <>
      <div className=" flex-wrap  ml-[5vw]  w-[90vw] sm:w-[70vw] rounded-2xl bg-white flex justify-between shadow shadow-black overflow-hidden">
        <form
          action="submit"
          className="flex flex-row w-full justify-between "
           onSubmit={submitHandler}
        >
          <div className=" flex  flex-col w-1/4 rounded-2xl  justify-around POPPINS align-middle text-[2vw] sm:text-[1.5vw]  ">
            <label htmlFor="city" className=" m-auto font-bold">
              {" "}
              City
            </label>
            <input
              type="search"
              name="city"
              className=" h-1/2 m-auto rounded-md  shadow-black shadow-sm"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className=" flex flex-col w-1/4 rounded-2xl  justify-around POPPINS align-middle text-[2vw] sm:text-[1.5vw] px-2 mx-2 ">
            <label htmlFor="date" className=" m-auto font-bold">
              {" "}
              Date
            </label>
            <input
              type="date"
              name="date"
              className=" h-1/2  m-auto rounded-md shadow-black shadow-sm  "
              placeholder="Select date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className=" flex flex-row-reverse bg-[#289CAC] items-center w-[4em] lg:w-[8em] rounded-2xl   POPPINS align-middle "
           onClick={(e)=> submitHandler(e)}>
            <AiOutlineSearch size={45} color={"#144E56"} />
          </div>
        </form>
      </div>
      {
         !city && <div className="ml-[10vw] text-[1vw] font-bold text-red-500">Please enter a city name above. 
            Example- Delhi, Kolkata, Jaipur etc</div>
      }

      {dest &&
        dest.map((item) => {
                
          return ( <Box key={item._id} props={item} /> ) 
        })}
    </>
  );
};

export default SearchBar;
