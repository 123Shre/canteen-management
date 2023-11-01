import React, { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import axios from "axios"; // Import axios for making API requests

function OrderSummary() {
  const { cartState } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage when the component mounts
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  const calculateTotal = (item) => {
    return item.productPrice * item.quantity;
  };

  const calculateCombinedTotal = () => {
    let combinedTotal = 0;
    for (const item of cartData) {
      combinedTotal += calculateTotal(item);
    }
    return combinedTotal;
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Prepare payment data
    const total = calculateCombinedTotal(); 
    const data = await axios.post("http://localhost:3001/api/razorpay/create-order", {total: calculateCombinedTotal()})
    console.log(data);
   // Calculate the total amount
    const options = {
      key: "rzp_test_ncrhyDRWZSEQbW",
      name: "Annapurna Canteen Services",
      currency: "INR", 
      amount: total * 100, 
      order_id: data.data.id, 
      description: "Visit next Time",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Payment success callback
        if (response.razorpay_payment.id) {
          alert("Payment successful!");
        } else {
          alert("Payment failed.");
        }
      },
      prefill: {
        name: "Annapurna Canteen Services",
        email: "annapurnacant@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography variant="h1" color="white" className="font-normal">
          Order Summary
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {cartData.map((item) => (
            <li key={item._id} className="flex items-center justify-between">
              <Typography className="font-normal">{item.productName}</Typography>
              <Typography className="font-normal">
                {item.productPrice} x {item.quantity}
              </Typography>
              <Typography className="font-normal">
                &#8377;{item.productPrice * item.quantity}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-4 p-0 overflow-hidden">
        <Typography variant="h1" color="white" className="font-normal text-2xl">
          Total: &#8377;{calculateCombinedTotal()}
        </Typography>
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
          onClick={makePayment}
        >
          Pay Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default OrderSummary;
