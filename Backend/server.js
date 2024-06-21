require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

app.use(bodyParser.json());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const recipes = require('./routes/recipes');
const pantryItems = require('./routes/pantryItems');
const mealPlans = require('./routes/mealPlans');

app.use('/api/recipes', recipes);
app.use('/api/pantryItems', pantryItems);
app.use('/api/mealPlans', mealPlans);



app.get('/', (req, res) => { //TODO: check this
  res.send('Hello, Meal Planner!');
});



const auth = require('./routes/auth');

app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});