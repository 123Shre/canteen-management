import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../Context/CartContext";
import CartDisplay from "../Customer/Cart";
const ProductCard = ({
  productName,
  productMaterial,
  productCategory,
  productPicture,
  productPrice,
  _id,
}) => {
  const { dispatch } = useContext(CartContext);
  const addToCart = async (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div
      id={_id}
      className="product-card border w-fit min-w-[250px] border-gray-400 min-h-[400px] max-h-[750px] p-2 m-2 rounded relative "
    >
      {/* <img className="w-full rounded h-auto" src={url} /> */}

      <div className="product-content w-full">
        <img className="h-64 w-60 mr-0" src={productPicture}></img>
        <h3 className="product-company text-lg font-semibold ml-2 mb-1 break-words">
          {productName}
        </h3>
        <p className="product-model ml-2 mb-1 text-md break-words max-w-[300px]">
          {productMaterial}
        </p>
        <p className=""></p>
        <p className="price text-xl ml-2 mb-1 font-semibold">
          &#8377; {productPrice}
        </p>
        <button
          className="absolute bottom-4 right-2 add-to-cart font-xl w-[95%] ml-[2.5%] mx-auto border bg-gray-600 hover:bg-brown-300 border-gray-400 rounded px-4 py-2 ring-inset"
          onClick={() =>
            addToCart({ _id, productName, productMaterial, productPrice })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    // Fetch product data from your API using Axios
    axios
      .post("http://localhost:3001/staff/viewmenu")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = sortBy
    ? products.filter((product) => product.productCategory === sortBy)
    : products;

  return (
    <>
      <label htmlFor="sort">Sort by Category:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
        <option value="Eggi">Eggi</option>
      </select>
      <div className="product-list flex flex-row">
        {sortedProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>



      <CartDisplay/>
    </>
  );
};
export default ProductPage;
