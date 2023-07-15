import React, { useEffect } from "react";
import "../../styles/box.scss";
import { useState } from "react";
import axios from "axios";

const Box = ({ props }) => {
  const [image, setImage] = useState();
   

  
  useEffect(() => {
     axios.get(`https://api.unsplash.com/photos?page=1&query=${props.name}&client_id=VzYzCV161H70QxU-EqlOg150kgdPlVhxm4hJF7_gpoM`)
    .then((res) => {
     console.log(res)
      setImage(res.data[0].urls.small)
     })
     .catch((err) => {
       console.log(err)
     });
   }, []);

 



  return (
    <>
      <br />
      <div className=" box">
        <div className="start-div">
          <img src={image} alt="" />
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
          <button className="btn"> Book Ticket</button>
        </div>
      </div>
    </>
  );
};

export default Box;
