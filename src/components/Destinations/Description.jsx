import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { server } from "../../main.jsx";
import logo from "../../assets/travler-logo.svg";

const Description = ({ destination_prop }) => {
  const [destination, setDestination] = useState(destination_prop);
  const [amount, setAmount] = useState(destination && destination.entryPrice);

  useEffect(() => {
    setDestination(destination_prop);

    if (amount === 0 || !amount) {
      setAmount(destination && destination.entryPrice);
    }
  }, [destination, destination_prop, amount]);
  console.log(destination);

  const checkoutHandler = async () => {
    axios.defaults.withCredentials = true;
    const {
      data: { order },
    } = await axios.post(
      `${server}/api/v1/payment/checkout`,
      {
        amount: amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const {
      data: { key },
    } = await axios.get(`${server}/api/v1/payment/getKey`, {
      withCredentials: true,
    });

    const options = {
      key: key, // Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Lokesh Kumar Choudhary",
      description: "Travler Test Transaction",
      image: logo,
      order_id: order.id, // Passed the `id` obtained in the response
      callback_url: `${server}/api/v1/payment/paymentVerification?destination_id=${
        destination._id
      }&persons=${amount / destination.entryPrice}`,
      prefill: {
        name: "Travler CEO - Lokesh Choudhary",
        email: "LokeshChoudhary@travler.com",
        contact: "8170820742",
      },
      notes: {
        address: "Travler Office Gandhinagar",
      },
      theme: {
        color: "#5accb7",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <div className=" flex flex-col justify-between POPPINS mt-2">
        <div className=" flex flex-row justify-around h-fit ">
          <div className=" POPPINS w-1/2 flex flex-col bg-white rounded-2xl">
            <span className="text-[5vw] lg:text-[3vw] px-3"> About</span>
            <br />
            <p className=" text-[3vw] lg:text-[1.5vw] mx-[5px]">
              {" "}
              {destination && destination.description}
            </p>
            <br />
          </div>

          <div className=" bg-white flex flex-col rounded-2xl w-1/3">
            <span className="text-[5vw] lg:text-[3vw] px-3 self-center">
              {" "}
              Timings
            </span>
            <br />
            <div className=" text-[3vw] lg:text-[1.5vw] mx-[5px]">
              <ul>
                {destination &&
                  Object.keys(destination.timing).map((key, index) => {
                    return (
                      <li key={index}>
                        {" "}
                        {key} : {destination.timing[key]}
                      </li>
                    );
                  })}
              </ul>
            </div>

            <br />
          </div>
        </div>

        <br />

        <div className=" flex flex-row justify-around h-1/3 POPPINS bg-white w-[91vw] rounded-2xl self-center">
          <div className=" flex flex-col pt-2">
            <div className="flex flex-col ">
              <span className=" lg:font-semibold font-medium text-[3.5vw] sm:text-[2.5vw] lg:text-[1.5vw]">
                {" "}
                Select Date
              </span>{" "}
              <br />
              <span className=" flex flex-col lg:flex-row justify-center items-center text-[2.5vw] lg:text-[1.5vw]">
                <span className=" flex flex-col  ">
                  <label htmlFor="CheckIn" className="font-semibold">
                    {" "}
                    Check in
                  </label>
                  <input type="date" name="CheckIn" placeholder="Check in" />
                </span>
                <span className=" flex flex-col ">
                  <label htmlFor="CheckOut" className="font-semibold">
                    {" "}
                    Check out
                  </label>
                  <input type="date" name="CheckOut" placeholder="Check out" />
                </span>
              </span>
            </div>
            <br />
            <div className="flex flex-col text-[2.5vw]">
              <span className=" font-semibold lg:text-[1.5vw]"> Persons</span>
              <span className=" flex justify-center items-center lg:text-[1.5vw]">
                <input
                  type="number"
                  name="nationality"
                  placeholder="Enter no. of persons"
                  required
                  onChange={(e) => {
                    setAmount(amount * e.target.value);
                  }}
                />
              </span>
            </div>
            <br />
          </div>
          <div className=" flex flex-col justify-center items-center font-bold text-[3.5vw] lg:text-[2vw]  ">
            <span>Ticket Fare</span>
            <span>Rs. {amount} </span>
          </div>
          <div className=" flex justify-center items-center font-bold text-[4vw] lg:text-[2vw]">
            {amount !== 0 && (
              <button
                className="bg-[#FF7324] text-[white] px-2 py-2 rounded-2xl font-bold shadow-md hover:shadow-lg shadow-black hover:bg-[#5d2e08] transition duration"
                onClick={checkoutHandler}
              >
                {" "}
                BOOK !{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
