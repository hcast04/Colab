import React, { useEffect, useState, useContext } from 'react';
import { getRecipes, addRecipe, updateRecipe, deleteRecipe } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const { logout } = useContext(AuthContext); // Get logout function from AuthContext

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await getRecipes();
      setRecipes(response.data);
    } catch (err) {
      console.error(err);
      logout(); // Logout user if fetching recipes fails
    }
  };

  const handleAddRecipe = async (recipe) => {
    try {
      const response = await addRecipe(recipe);
      setRecipes([...recipes, response.data]);
    } catch (err) {
      console.error(err);
      logout(); // Logout user if adding recipe fails
    }
  };

  const handleUpdateRecipe = async (id, updatedRecipe) => {
    try {
      const response = await updateRecipe(id, updatedRecipe);
      setRecipes(recipes.map(recipe => (recipe._id === id ? response.data : recipe)));
    } catch (err) {
      console.error(err);
      logout(); // Logout user if updating recipe fails
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (err) {
      console.error(err);
      logout(); // Logout user if deleting recipe fails
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      {/* Render recipes and forms for adding/updating */}
      {recipes.map(recipe => (
        <div key={recipe._id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.instructions}</p>
          {/* Add buttons for update and delete with respective handlers */}
        </div>
      ))}
      {/* Add form for adding a new recipe */}
    </div>
  );
};

export default RecipeList;
