import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
// import AlertDismissible from "../Utility/Alert";

const CartDisplay = () => {
  const { cartState, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  const calculateTotal = (item) => {
    return item.productPrice * item.quantity;
  };

  const calculateCombinedTotal = () => {
    let combinedTotal = 0;
    for (const item of cartState.items) {
      combinedTotal += calculateTotal(item);
    }
    return combinedTotal;
  };
  const handleBuyNow = () => {
   
    const storedCartData = localStorage.setItem(
      "cartData",
      JSON.stringify(cartState.items)
    );

    const l = localStorage.getItem("cartData");
    console.log(l.length);
    if (l.length !== 2) {
      navigate("/orderlist");
    } else {
      setShowErrorAlert(true);
    }

    dispatch({ type: "CLEAR_CART" }); // Clear the global cart state
  };

  return (
    <div>
       {showErrorAlert && <Alert open={showErrorAlert} color="red" onClose={() => setShowErrorAlert(false)}>
        Please select the dish
      </Alert>}
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="divide-y divide-gray-300">
        {cartState.items.map((item) => {
          // alert(item.quantity);
          return (
            <li key={item._id} className="py-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{item.productName}</p>
                  <p className="text-gray-600">
                    &#8377;{item.productPrice} - Quantity: {item.quantity} Total
                    &#8377;{calculateTotal(item)}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Increase Quantity
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Decrease Quantity
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-xl font-semibold mt-4">
        Combined Total: &#8377;{calculateCombinedTotal()}
      </p>
      <button
        onClick={handleBuyNow}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buy Now
      </button>

     
    </div>
  );
};

export default CartDisplay;
