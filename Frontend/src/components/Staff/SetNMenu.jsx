import React, { useState } from "react";
// import SelectInputControl from "./selectControl";
import axios from "axios";
// import Cookies from "js-cookie";



function ProductForm() {
  const [productName, setProductName] = useState("");
  //const [productCategory, setProductCategory] = useState("");
  const [productMaterial, setProductMaterial] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPicture, setProductPicture] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileChange = (e) => {
    setProductPicture(e.target.files[0]);
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = await Cookies.get("authToken");

//     const headers =  {
//       "Content-Type": "multipart/form-data",
//       authorization: token // Set the content type for file uploads
//     }


 
  
//     try {
//       const response = await axios.post('/api/addNewProduct', formData, {headers});
//       console.log(response);
//       if (response.data.status == "ok") {
//         alert("Product added successfully!");
//         // You can redirect or perform other actions upon successful submission
//       } else {
//         alert("Failed to add the product. Please try again.");
//       }
//     } catch (error) {
//       console.log('Error:', error);
//       alert("An error occurred. Please try again later.");
//     }
//   };
  return (
    //box-shadow:
    <>
      <form
        // onSubmit={handleSubmit}
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

            <div className="mb-4 w-full">
              <label
                htmlFor="productPicture"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Dish Picture
              </label>
              <input
                type="file"
                id="productPicture"
                onChange={handleFileChange}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                accept="image/*"
              />
              {productPicture && (
                <img
                  src={URL.createObjectURL(productPicture)}
                  alt="Product Preview"
                  className="mt-2 max-w-[100px] h-auto"
                />
              )}
            </div>

       
          </div>
          <div className="max-w-[430px] min-w-[400px]">
            <div className="mb-4 w-full">
              <label
                htmlFor="selectOption"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Select Option
              </label>
              <select
                id="selectOption"
                name="selectOption"
                value={selectedCategory}
                onChange={handleSelectChange}
                className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                required
              >
                <option value="">Select an Category</option>
                <option value="Painting">Vegetarian</option>
                <option value="Sculpture">Eggetarian</option>
                <option value="Collectibles">Non Vegetarian</option>
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
