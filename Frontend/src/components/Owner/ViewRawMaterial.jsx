import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewRawFoodMaterial = () => {
  const [rawFoodMaterials, setRawFoodMaterials] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/owner/viewRawFood').then((response) => {
      setRawFoodMaterials(response.data);
    });
  }, []);

  return (
    <div>
      <h1>View Raw Food Materials</h1>

      <ul>
        {rawFoodMaterials.map((rawFoodMaterial) => (
          <li key={rawFoodMaterial.id}>{rawFoodMaterial.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewRawFoodMaterial;
