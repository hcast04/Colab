const express = require('express');
const router = express.Router();
const MealPlan = require('../models/MealPlan');

// Get all meal plans
router.get('/', async (req, res) => {
  const mealPlans = await MealPlan.find();
  res.json(mealPlans);
});

// Add a new meal plan
router.post('/', async (req, res) => {
  const newMealPlan = new MealPlan(req.body);
  await newMealPlan.save();
  res.json(newMealPlan);
});


// Get a single meal plan
router.get('/:id', async (req, res) => {
    const mealPlan = await MealPlan.findById(req.params.id);
    res.json(mealPlan);
});
  
  // Update a meal plan
router.put('/:id', async (req, res) => {
    const updatedMealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMealPlan);
});
  
// Delete a meal plan
router.delete('/:id', async (req, res) => {
    await MealPlan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal plan deleted' });
});
  
module.exports = router;
