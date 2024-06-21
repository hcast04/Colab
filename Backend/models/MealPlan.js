const mongoose = require('mongoose');

const MealPlanSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
});
  
module.exports = mongoose.model('MealPlan', MealPlanSchema);