import React from 'react';

const Menu = () => {
  

  return (
    <ul>
      {foodItems.map((foodItem) => (
        <li key={foodItem.id}>{foodItem.name}</li>
      ))}
    </ul>
  );
};

export default Menu;
