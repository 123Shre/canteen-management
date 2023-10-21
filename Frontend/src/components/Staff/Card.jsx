const ProductCard = ({
  productName,
  productMaterial,
  productCategory,
  productPicture,
  productPrice,
  _id,
}) => {
  const addToCart = async (productId) => {
    try {
    } catch (error) {}
  };
  
  return (
    
      <div
        id={_id}
        className="product-card border w-fit min-w-[250px] border-gray-400 min-h-[400px] max-h-[750px] p-2 m-2 rounded relative "
      >
        {/* <img className="w-full rounded h-auto" src={url} /> */}
        <div className="product-content w-full">
          <h3 className="product-company text-lg font-semibold ml-2 mb-1 break-words">
            {productName}
          </h3>
          <p className="product-model ml-2 mb-1 text-md break-words max-w-[300px]">
            {productMaterial}
          </p>
          <p className=""></p>
          <p className="price text-xl ml-2 mb-1 font-semibold">
            {" "}
            &#8377; {productPrice}
          </p>
          <button
            className="absolute bottom-4 right-2 add-to-cart font-xl w-[95%] ml-[2.5%] mx-auto border border-gray-400 rounded px-4 py-2 ring-inset"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
   
  );
};

const products = [
  {
    _id: "1",
    productName: "Pav Bhaji",
    productCategory: "Veg",
    productPicture: "uploads/",
    productPrice: 199,
  },
  {
    _id: "2",
    productName: "Khichdi",
    productCategory: "Veg",
    productPicture: "uploads/",
    productPrice: 199,
  },
  {
    _id: "3",
    productName: "Tandoori Chicken",
    productCategory: "Non-Veg",
    productPicture: "uploads/",
    productPrice: 499,
  },
  {
    _id: "4",
    productName: "Naan",
    productCategory: "Veg",
    productPicture: "uploads/",
    productPrice: 99,
  },
  {
    _id: "5",
    productName: "Gulab Jamun",
    productCategory: "Veg",
    productPicture: "uploads/",
    productPrice: 199,
  },
  {
    _id: "6",
    productName: "Omelet",

    productCategory: "Eggi",
    productPicture: "uploads/",
    productPrice: 99,
  },
  {
    _id: "7",
    productName: "Egg Bhurji",

    productCategory: "Eggi",
    productPicture: "uploads/",
    productPrice: 149,
  },
  {
    _id: "8",
    productName: "Egg Curry",
    productMaterial: "Eggs, Spices, Gravy",
    productCategory: "Eggi",
    productPicture: "uploads/",
    productPrice: 199,
  },
];

const ProductPage = () => {
  return (
    <div className="product-list flex flex-row">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default ProductPage;
