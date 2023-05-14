const express = require('express')
const cors = require('cors');

const app = express()

const Recipe = require('./models/Recipe.js');

app.use(cors());

app.get('/', async (req, res) => {
  const recipe = new Recipe({ "name": "Лазанья"});

  await recipe.save();
  const recipes = await Recipe.find();

  console.log(recipes)

  res.json({ "message": 'Hello World!'});
});

module.exports = app;