const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ name: String, quantity: String }],
  instructions: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);