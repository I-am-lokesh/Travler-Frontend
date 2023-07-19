import { useEffect } from "react";
import "../../styles/box.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const  Box = ({ props }) => {

  const [image, setImage] = useState();
   

  
  useEffect(() => {
     axios.get(`https://api.unsplash.com/search/photos?query=${props.name}&client_id=VzYzCV161H70QxU-EqlOg150kgdPlVhxm4hJF7_gpoM`)
    .then((res) => {
     console.log(res)
      setImage(res.data.results[0].urls.small)
     })
     .catch((err) => {
       console.log(err)
     });
   }, [props]);
       
  const navigate = useNavigate();
  const clickHandler = () => { 
       navigate(`/destinations`, 
       { state: { destination_prop : props } })
  };
  


  return (
    <>
      <br />
      <div className=" box">
        <div className="start-div flex items-center justify-center overflow-hidden shadow-md shadow-black">
          <img src={image} alt="" className=" h-full rounded-[5px] shadow-md shadow-black " />
        </div>
        <div className="mid-div">
          <div className="mid-first ">
            <h2 className=""> {props.name} </h2>
            <p> {props.description}</p>
          </div>
          <div className="mid-second">
            Timings :
            {Object.keys(props.timing).map((key, index) => {
              return (
                <p key={index}>
                  {" "}
                  {key} : {props.timing[key]}
                </p>
              );
            })}
          </div>
        </div>
        <div className=" end-div">
          <div> Fare - Rs. {props.entryPrice}</div>
          <button className="btn" onClick={clickHandler}> Book Ticket</button>
        </div>
      </div>
    </>
  );
};

export default Box;
