import React, { useState } from 'react';
import axios from 'axios';

const SetMenu = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post('/menu', formData);

    setFormData({
      name: '',
      price: '',
      quantity:null
    });
  };

  return (
    <div>
      <h1>Todays Menu</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br/>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br/><br/>
        <label htmlFor="price">Price:</label><br/>
        <input
          type="number"
          name="price"
          placeholder="Set Price"
          value={formData.price}
          onChange={handleChange}
        />
         <button type="submit">Add Item to Today's Specials!</button>
      </form>
    </div>
  );
};

export default SetMenu;
