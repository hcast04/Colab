const express = require('express');
const router = express.Router();
const PantryItem = require('../models/PantryItem');

// Get all pantry items
router.get('/', async (req, res) => {
  const pantryItems = await PantryItem.find();
  res.json(pantryItems);
});

// Add a new pantry item
router.post('/', async (req, res) => {
  const newPantryItem = new PantryItem(req.body);
  await newPantryItem.save();
  res.json(newPantryItem);
});


// Get a single pantry item
router.get('/:id', async (req, res) => {
    const pantryitem = await PantryItem.findById(req.params.id);
    res.json(pantryitem);
});
  
// Update a pantry item
router.put('/:id', async (req, res) => {
    const updatedPantryItem = await PantryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPantryItem);
});
  
// Delete a pantry item
router.delete('/:id', async (req, res) => {
    await PantryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pantry item deleted' });
});
  
module.exports = router;
