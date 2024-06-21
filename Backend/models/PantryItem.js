const mongoose = require('mongoose');

const PantryItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: String,
});
  
module.exports = mongoose.model('PantryItem', PantryItemSchema);