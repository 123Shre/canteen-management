import React, { useState } from "react";
// import SelectInputControl from "./selectControl";
import axios from "axios";
import Cookies from "js-cookie";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productQuantity, setproductQuantity] = useState("");

  console.log(productPicture);
  const token = Cookies.get("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("productPrice", productPrice);
    //   formData.append("productPicture", productPicture);
      formData.append("selectedCategory", selectedCategory);
      formData.append("productQuantity", productQuantity);
      const response = await axios.post(
        "http://localhost:3001/staff/setmenu",
        formData,
        {
          headers: { Authorization: localStorage.getItem("token") ,
          "Content-Type": "multipart/form-data",},
        }
      );

      // Handle the successful response here.
      const data = response.data;
      console.log(productName + productPrice);
      if (data.status === "ok") {
        alert("data added successfully");
        // You can also reset the form fields if needed.
        setProductName("");
        setProductPrice("");
        // setProductPicture(null);
        setSelectedCategory("");
        setproductQuantity("");
      } else {
        // Handle other cases, such as validation errors or failure.
        // For example, setting an error message state variable.
        console.log("Failed to add the product. Please try again.");
      }
    } catch (error) {
      // Handle the error here, for example, setting an error message.
      console.log(error);
      console.log("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="w-[900px] mx-auto bg-[#fff] px-4 py-2 rounded mt-4 border center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <p
          htmlFor="productName"
          className="block text-gray-800 text-2xl font-bold mb-2"
        >
          Add New Dish
        </p>
        <div className="flex justify-between items-center">
          <div className="max-w-[430px] min-w-[400px]">
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Dish Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                placeholder="Enter Product Name"
                required
              />
            </div>

            {/* <div className="mb-4 w-full">
              <label
                htmlFor="productPicture"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Dish Picture
              </label>
              <input
                type="file"
                id="productPicture"
                name="image"
                onChange={(e) => setProductPicture(e.target.files[0])}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                // accept="image/*"
              />
              {productPicture && (
                <img
                  src={URL.createObjectURL(productPicture)}
                  alt="Product Preview"
                  className="mt-2 max-w-[100px] h-auto"
                />
              )}
            </div> */}
          </div>
          <div className="max-w-[430px] min-w-[400px]">
            <div className="mb-4 w-full">
              <label
                htmlFor="selectOption"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Select Category
              </label>
              <select
                id="selectOption"
                name="selectOption"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                required
              >
                <option value="">Select an Category</option>
                <option value="Veg">Vegetarian</option>
                <option value="Eggi">Eggetarian</option>
                <option value="Non-Veg">Non Vegetarian</option>
              </select>
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="productPrice"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Product Price
              </label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                placeholder="Product Price"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="productQuantity"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Product Quantity
              </label>
              <input
                type="number"
                id="productQuantity"
                value={productQuantity}
                onChange={(e) => setproductQuantity(e.target.value)}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                placeholder="Product Quantity"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="appearance-none block w-full font-semibold text-[#fff] bg-[#0D0D0D] border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductForm;
