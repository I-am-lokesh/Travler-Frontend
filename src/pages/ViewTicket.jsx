import QRCode from "react-qr-code";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { server } from "../main.jsx";
const ViewTicket = () => {
  const location = useLocation();
  const ticket_id = location.state.ticket_id;
  const [ticket, setTicket] = useState({});

  console.log(ticket_id);

  useEffect(() => {
    axios
      .post(
        `${server}/api/v1/tickets/getTicketById`,
        {
          ticket_id: ticket_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setTicket(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(ticket);


    const printTicket = () => {
        window.print() ;
    }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[300px] h-[400px]  bg-white rounded-2xl shadow-md  flex flex-col items-center p-8">
        <p className=" font-bold"> Travler Company pvt ltd </p>
        <br />
        <div className="h-[40%] flex">
          <div className="w-[50%] h-full text-xs">
            <p> Booking Id - {ticket._id && ticket._id} </p>
            <p> Ticket Id - {ticket.ticket_id && ticket.ticket_id}</p>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center ">
            { ticket._id && <QRCode value={ ticket._id} size={100} /> }
          </div>
        </div>
        <ul>
          <li> Date : {ticket.Date && ticket.Date} </li>

          <li>
            {" "}
            Destination name :{" "}
            {ticket.destination_name && ticket.destination_name}{" "}
          </li>

          <li> userID : {ticket.user_id && ticket.user_id} </li>

          <li>
            {" "}
            Total bill(inclusive of taxes and convenience fee) :{" "}Rs.{" "}
            {ticket.total_price && ticket.total_price}{" "}
          </li>

          <li> payment_id : {ticket.payment_id && ticket.payment_id} </li>
        </ul>
      </div>
         <br /><br />
        <button className="bg-[#FF7324] text-[white] px-2 py-2 rounded-2xl font-bold shadow shadow-black "
         onClick={printTicket}>Print Ticket </button>

         <Link to ="/"> Go to Home </Link>
    </div>
  );
};

export default ViewTicket;
