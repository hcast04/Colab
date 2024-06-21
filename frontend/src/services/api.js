import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Services for recipes
export const getRecipes = () => axios.get(`${API_URL}/recipes`);
export const addRecipe = (recipe) => axios.post(`${API_URL}/recipes`, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${API_URL}/recipes/${id}`, recipe);
export const deleteRecipe = (id) => axios.delete(`${API_URL}/recipes/${id}`);

// Services for pantry items
export const getPantryItems = () => axios.get(`${API_URL}/pantryItems`);
export const addPantryItem = (PantryItem) => axios.post(`${API_URL}/pantryItems`, PantryItem);
export const updatePantryItem = (id, PantryItem) => axios.put(`${API_URL}/pantryItems/${id}`, PantryItem);
export const deletePantryItem = (id) => axios.delete(`${API_URL}/pantryItems/${id}`);


// Services for meal plans
export const getMealPlans = () => axios.get(`${API_URL}/mealPlans`);
export const addMealPlan = (MealPlan) => axios.post(`${API_URL}/mealPlans`, MealPlan);
export const updateMealPlan = (id, MealPlan) => axios.put(`${API_URL}/mealPlans/${id}`, MealPlan);
export const deleteMealPlan = (id) => axios.delete(`${API_URL}/mealPlans/${id}`);