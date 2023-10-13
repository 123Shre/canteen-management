import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SetRawMaterial = () => {
  const [rawFoodMaterials, setRawFoodMaterials] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:3001/owner/rawFoodMaterials').then((response) => {
      setRawFoodMaterials(response.data);
    });
  }, []);

  
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    axios.post('http://localhost:3001/owner/rawFoodMaterials', formData).then((response) => {
      console.log('Success:', response);
    }).catch((error) => {
      
      console.log("Error:", error);
    });
  };

  return (
    <div>
      <h1>Set Raw Food Material</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetRawMaterial;
