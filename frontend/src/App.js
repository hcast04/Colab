import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PantryItemList from './components/PantryItemList';
import MealPlanList from './components/MealPlanList';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={Login} />
          <Route path="/register" element={Register} />
          <ProtectedRoute path="/recipes" element={RecipeList} />
          <ProtectedRoute path="/pantryItems" element={PantryItemList} />
          <ProtectedRoute path="/mealPlans" element={MealPlanList} />
          <Route path="/" component={Login} /> {/* Default to login */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
