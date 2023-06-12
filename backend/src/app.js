const express = require('express')
const cors = require('cors');

const app = express()

const Recipe = require('./models/Recipe.js');
const { getAllRecipes } = require('./controllers/recipes.js');

app.use(cors());

app.get('/', getAllRecipes);

app.post('/create-recipe', async (req, res) => {
  try {
    console.log('body', req.body);
    const recipe = new Recipe({"name": "Паста Болоньезе"});
    await recipe.save();
    
    res.json({"created": recipe});

  } catch (err) {
    console.log('err', err);

  }

});

app.delete('/delete-all', async (req, res) => {
  try {
    const result = await Recipe.deleteMany({});
    
    res.json(result);
  } catch (err) {
    console.log('err', err);
  }

});

module.exports = app;