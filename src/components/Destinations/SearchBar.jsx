import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { server } from "../../main.jsx";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../pages/Destinations.jsx";
const SearchBar = ({ dest_name }) => {
  const [inputValue, setInputValue] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [final, setFinal] = useState();
  
  const {  setDestination } = useContext(MyContext);

  useEffect(() => {
    axios
      .get(`${server}/api/v1/destination/get/all`)
      .then((response) => {
        setDestinations(response.data.destinations);
      })
      .catch((error) => {
        console.error("Error fetching destination names:", error);
      });
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (destination) => {
    setInputValue(destination.name + ", " + destination.city);
    setFinal(destination);
  };

  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setDestination(final);
    // final && navigate(`/destinations`, { state: { destination_prop : final } });
   

  };

  return (
    <>
      <div className=" flex-wrap  ml-[5vw] w-[50vw]  rounded-2xl bg-white flex justify-around shadow shadow-black overflow-hidden self-center">
        <form action="submit" className="flex flex-row w-full justify-between ">
          <div className=" flex  flex-col w-1/4 rounded-2xl  justify-around POPPINS align-middle text-[1.5vw] sm:text-[1.5vw]  ">
            <label htmlFor="destination" className=" m-auto font-bold">
              {" "}
              Destination
            </label>
            <input
              type="search"
              name="destination"
              id="destination"
              className=" h-1/2 m-auto rounded-md  shadow-black shadow-sm"
              placeholder={dest_name}
              value={inputValue}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className=" flex flex-row-reverse items-center w-1/4 rounded-2xl  POPPINS align-middle ">
            <button onClick={handleSubmit}>
              {" "}
              <AiOutlineSearch size={45} />{" "}
            </button>
          </div>
        </form>
      </div>

      <div className="dropDown">
        {destinations &&
          destinations
            .filter((item) => {
              const searchTerm = inputValue && inputValue.toLowerCase();

              const destinationName = item.name && item.name.toLowerCase();

              return (
                searchTerm &&
                destinationName &&
                destinationName.startsWith(searchTerm)
              );
            })
            .slice(0, 10)
            .map((destination) => (
              <div
                key={destination._id}
                className="dropDownItem flex-wrap rounded-sm MERRI  ml-[6vw]  w-[30vw] h-[30px] sm:w-[25vw]  bg-white flex  shadow shadow-black overflow-hidden self-center text-sm cursor-pointer"
                onClick={() => handleSearch(destination)}
              >
                {" "}
                {destination.name}, {destination.city}{" "}
              </div>
            ))}
      </div>
    </>
  );
};

export default SearchBar;
