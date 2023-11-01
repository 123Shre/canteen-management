// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
// import ProductCard from ;
import CartDisplay from "../Customer/Cart";
import { Navbar1 } from "../All/Navbar";
import { ProductCard } from "./Card";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Veg"); // Set an initial active category

  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch product data from your API using Axios
    axios
      .post("http://localhost:3001/staff/viewmenu")
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.productCategory === activeCategory
  );

  return (
    <main className="h-screen bg-gray-500">
      <Navbar1 />

      <div className="text-2xl mt-4 mb-2 px-4 mx-auto w-fit py-2  border-black ">
        <button
          className={`mr-4 ${
            activeCategory === "Veg" ? "text-bold border-b-4" : ""
          }`}
          onClick={() => setActiveCategory("Veg")}
        >
          Veg
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "Non-Veg" ? "text-bold border-b-4" : ""
          }`}
          onClick={() => setActiveCategory("Non-Veg")}
        >
          Non-Veg
        </button>
        <button
          className={`mr-4 ${
            activeCategory === "Eggi" ? "text-bold border-b-4" : ""
          }`}
          onClick={() => setActiveCategory("Eggi")}
        >
          Eggi
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
         <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <CartDisplay />
      {/* <Footer /> */}
    </main>
  );
}