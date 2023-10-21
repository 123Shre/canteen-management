import React, { useState } from "react";
import axios from "axios";

const SetMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: null,
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/staff", formData);

    setFormData({
      name: "",
      price: "",
      quantity: null,
      description: "",
    });
  };

  return (
    <div>
      <h1>Todays Menu</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input
          type="number"
          name="price"
          placeholder="Set Price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Set Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <br />
        <input
          type="text"
          name="description"
          placeholder="Set Description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="category">Category:</label>
        <br />
        <input
          type="text"
          name="category"
          placeholder="Set Category"
          value={formData.category}
          onChange={handleChange}
        />
        <button type="submit">Add Item to Today's Specials!</button>
      </form>
    </div>
  );
};

export default SetMenu;
