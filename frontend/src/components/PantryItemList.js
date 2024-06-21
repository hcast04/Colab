import React, { useEffect, useState, useContext } from 'react';
import { getPantryItems, addPantryItem, updatePantryItem, deletePantryItem } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const PantryItemList = () => {
  const [pantryItems, setPantryItems] = useState([]);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    fetchPantryItems();
  }, []);

  const fetchPantryItems = async () => {
    try {
      const response = await getPantryItems();
      setPantryItems(response.data);
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const handleAddPantryItem = async (pantryItem) => {
    try {
      const response = await addPantryItem(pantryItem);
      setPantryItems([...pantryItems, response.data]);
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const handleUpdatePantryItem = async (id, updatedPantryItem) => {
    try {
      const response = await updatePantryItem(id, updatedPantryItem);
      setPantryItems(pantryItems.map(pantryItem => (pantryItem._id === id ? response.data : pantryItem)));
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const handleDeletePantryItem = async (id) => {
    try {
      await deletePantryItem(id);
      setPantryItems(pantryItems.filter(pantryItem => pantryItem._id !== id));
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  return (
    <div>
      <h1>Pantry Items</h1>
      {pantryItems.map(pantryItem => (
        <div key={pantryItem._id}>
          <h2>{pantryItem.name}</h2>
          {/* Render pantry item details */}
        </div>
      ))}
      {/* Add form for adding a new pantry item */}
    </div>
  );
};

export default PantryItemList;
