import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { server } from "../main.jsx";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const paymentId = searchQuery.get("reference_id");
  const destination_id = searchQuery.get("destination_id");
  const persons = Number(searchQuery.get("persons"));
               
  

  const [response, setResponse] = useState({}) ;

  useEffect(() => {
     axios
    .post(
      `${server}/api/v1/tickets/book`,
      
      {
        payment_id: paymentId,
        destination_id: destination_id,
        persons: persons,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }

    )
    .then((res) => {
     
      console.log(res.data);
      setResponse(res.data) ;
     
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

   console.log(response)
 
  const navigate = useNavigate();

  const clickHandler = () => {
 
       response &&  navigate(`/viewTicket`, { state: { ticket_id : response.data._id } });
    
  };

  return (
    <div className=" flex flex-col items-center justify-center w-[100vw] h-[100vh] text-4xl">
      <h1 className=" font-bold text-lime-700"> TICKET BOOKED SUCCESSFULLY </h1>
      <h3>Payment reference id - </h3>
      <h4> {paymentId} </h4>
       <br />
      <button
        className="bg-[#FF7324] text-[white] px-2 py-2 rounded-2xl font-bold shadow-md shadow-black "
        onClick={clickHandler}
      > 
        {" "}
        View Ticket{" "}
      </button>
    </div>
  );
};

export default PaymentSuccess;
