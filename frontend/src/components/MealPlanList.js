import React, { useEffect, useState, useContext } from 'react';
import { getMealPlans, addMealPlan, updateMealPlan, deleteMealPlan } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const MealPlanList = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    try {
      const response = await getMealPlans();
      setMealPlans(response.data);
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const handleAddMealPlan = async (mealPlan) => {
    try {
      const response = await addMealPlan(mealPlan);
      setMealPlans([...mealPlans, response.data]);
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const handleUpdateMealPlan = async (id, updatedMealPlan) => {
    try {
      const response = await updateMealPlan(id, updatedMealPlan);
      setMealPlans(mealPlans.map(mealPlan => (mealPlan._id === id ? response.data : mealPlan)));
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const handleDeleteMealPlan = async (id) => {
    try {
      await deleteMealPlan(id);
      setMealPlans(mealPlans.filter(mealPlan => mealPlan._id !== id));
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  return (
    <div>
      <h1>Meal Plans</h1>
      {mealPlans.map(mealPlan => (
        <div key={mealPlan._id}>
          <h2>{mealPlan.date}</h2>
          {/* Render meal plan details */}
        </div>
      ))}
      {/* Add form for adding a new meal plan */}
    </div>
  );
};

export default MealPlanList;
