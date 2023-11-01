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
    <div className="p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-semibold mb-4">View Raw Food Materials</h1>
  
    <ul className="space-y-2">
      {rawFoodMaterials.map((rawFoodMaterial) => (
        <li
          key={rawFoodMaterial.id}
          className="flex items-center justify-between p-4 rounded-md bg-blue-50"
        >
          <span className="text-lg font-medium">{rawFoodMaterial.name}</span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ViewRawFoodMaterial;
